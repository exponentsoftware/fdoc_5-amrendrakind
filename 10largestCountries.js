//Find the 10 most largest countries
const axios = require('axios')

const API_URL = 'https://restcountries.eu/rest/v2/all'
var allData;

const fetchData = async () => {
    const url = API_URL
    const res = await axios.get(url)
    allData = res.data
 
   //Sorting and fetching 10 most largest countries name with area
const countryNameArea = () => {
    let country=[];
    const sortedData = allData.sort((a, b) => b.area - a.area).slice(0, 10);
    sortedData.map((item, index) => {
    country.push({country:item.name, area:item.area})

    })
    return country
  };
console.log(countryNameArea())
}
fetchData();