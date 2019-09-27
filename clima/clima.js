const axios = require('axios');


const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=6b1b5011fdbf093413b53d7064b4b6eb`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
}