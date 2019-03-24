const request = require('supertest');
const app = require('../src/app.js');

const Logs = require('../src/database/models/log');

test('Should be able to fetch news from NEWS Api', async () => {
    const response = await request(app).get('/api/news?searchBy=Juventus')
        .expect(200)
        .expect('Content-Type', /json/);

    const { data } = response.body;
       
    expect(data).toHaveProperty('status')
    expect(data).toHaveProperty('totalResults')
    expect(data).toHaveProperty('articles')

})

test('Should return suggestions for autocomplete', async () => {
    await Logs.findOrCreate({
        where: {
            searchText: 'Milan'
        }
    });
    
    const response = await request(app).get('/api/news/suggestions?searchBy=Milan')
        .expect(200)
        .expect('Content-Type', /json/);
    
    const { data } = response.body;    
    
    expect(Array.isArray(data)).toBe(true)
    expect(data.length).toBeGreaterThanOrEqual(1)
})