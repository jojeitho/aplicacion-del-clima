const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {


    try {
        let cord = await lugar.buscarLugar(direccion);
        let temp = await clima.getClima(cord.lat, cord.long);

        return `el clima en ${direccion} es de ${temp.temperatura} ${cord.lat}${cord.long}`

    } catch (e) {
        return `no se pudo determinar la temperatura en ${direccion}`;

    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));