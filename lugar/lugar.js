const axios = require("axios");


const getLugarLatLng = async(dir) => {


    const encodedUrl = encodeURI(dir);


    const instance = axios.create({
        url: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'ab208d3ef7msh12caf8bbc0b6169p1fd0aajsnf79fcd081f14' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
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

}

module.exports = {
    getLugarLatLng
}