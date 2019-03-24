const request = require('request');
const Sequelize = require('sequelize');

const Logs = require('../../database/models/log')

const Op = Sequelize.Op;

const searchNews = async (req, res) => {
    const searchText  = req.query.searchBy;
    const apiKey = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/everything?q=${searchText}&apiKey=${apiKey}`

    request(url, (err, response, body) => {
        if(err) console.log(err);

        if(response.statusCode === 200) {
            const data = JSON.parse(body)
            return res.json({
                data
            })
        } 
    })
}


const getSuggestions = async (req, res) => {
    const searchText = req.query.searchBy || '';

    const suggestions = await Logs.findAll({
        attributes: ['searchText'],
        where: {
            searchText: {
                [Op.iLike]: `${searchText}%`
            }
        }
    })
    res.json({
        data: suggestions
    })
}

module.exports = {getSuggestions, searchNews};
