const {drivers ,alospits} = require("../db.js");    
const axios = require("axios");


const GotDrivers = async () => {
let DriversDB = await drivers.findAll({include: {model : alospits}});
let infoAPI = (await axios.get("http://localhost:5000/drivers")).data;

const infoClean = infoAPI.map(function (elemento) {
    return {
        id : elemento.id,
        name : elemento.name.forename,
        Surname : elemento.name.surname,
        nacionalidad : elemento.nationality,
        fechadenacimiento : elemento.dob,
        description : elemento.description,
        image : elemento.image.url   ,
        Nameteam : elemento.teams,
    }
})

    
return DriversDB.concat(infoClean);
}

module.exports = GotDrivers