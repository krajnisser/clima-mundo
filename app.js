const {argv} = require('./config/yargs');
const clima = require('./clima/clima')

const {getLugarLatLng} = require('./lugar/lugar');

// getLugarLatLng(argv.address)
//          .then(resp => console.log(resp));

// clima.getClima(40.750000, -74.000000)
//         .then(resp => console.log(resp))
//         .catch(err => console.log(err));

const getInfo = async (direccion) => {

    try {
        const lugLatLng = await getLugarLatLng(direccion);
        const weather = await clima.getClima(lugLatLng.lat, lugLatLng.lng);
        return `El clima de ${lugLatLng.direccion} es de ${weather}`;

    } catch (error) {
        
        return `No se pudo determinar el clima de ${lugLatLng.direccion}`;

    }

   
};

getInfo(argv.address)
    .then(resp => console.log(resp))
    .catch(err => console.log('Ha ocurrido un error', err));