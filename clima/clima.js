const axios = require('axios');


const getClima = async(lat, lon) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=93f70d9b39be8c408f078d9c999607b5`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`no hay resultado para la ciudad${direccion}`);

    }
    let temperatura = resp.data.main.temp;
    // console.log(location);


    return {

        temperatura

    }

}


module.exports = {
    getClima
}