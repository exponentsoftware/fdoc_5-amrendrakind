//Find the 10 most largest countries
const axios = require('axios')

const API_URL = 'https://restcountries.eu/rest/v2/all'
var allData;

const fetchData = async () => {
    const url = API_URL
    const res = await axios.get(url)
    allData = res.data
    let lang = []

    allData.forEach(country => { 
        for (let i = 0; i < country.languages.length; i++) { 
        if (Object.keys(lang).indexOf(country.languages[i].name) == -1) 
            {
            lang[country.languages[i].name] = 1 
            }
        else {
            lang[country.languages[i].name] += 1}
        } })
    console.log("There are total",Object.keys(lang).length, "languages in all countries")
}
fetchData()
