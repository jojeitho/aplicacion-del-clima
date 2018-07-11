const axios = require('axios');


const buscarLugar = async(direccion) => {

    let converUrl = encodeURI(direccion);



    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${converUrl}&key=AIzaSyAz1VIv8AEL0vFW0WxgT45TPeYBKTl9xic`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`no hay resultado para la ciudad${direccion}`);

    }
    let location = resp.data.results[0];


    return {

        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        long: location.geometry.location.lng


    }

}


module.exports = {
    buscarLugar
}