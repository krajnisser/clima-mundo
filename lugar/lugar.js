const axios = require('axios');

const getLugarLatLng = async (address) => {

    const encodedURL = encodeURI(address);
    console.log(encodedURL);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {"x-rapidapi-key": "30e7e40dc8msh2a9c5c0382db382p1d2efejsnd55f417038da"}
    });

    const resp = await instance.get();
    
    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${address}`);
    }
    
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

};

module.exports = {
    getLugarLatLng
}

