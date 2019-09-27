const argv = require('yargs').options({
    address: {
        alias: 'adr',
        description: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.address);

module.exports = {
    argv
}