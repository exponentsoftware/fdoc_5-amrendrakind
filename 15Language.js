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

        var temp = [];
        for (var key in lang)
            temp.push([key, lang[key]]);

        temp.sort(function (a, b) {
            return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0
        });
    let country=[];
    for(let i=0;i<15;i++){
        country.push({language:temp[i][0], country:temp[i][1]})
    }
    console.log(country)
}

fetchData();