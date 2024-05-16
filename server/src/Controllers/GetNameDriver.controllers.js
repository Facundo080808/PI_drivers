const  axios  = require("axios");

const { Op } = require("sequelize");
const { drivers } = require("../db.js");


 
const GetDriverByName = async (name) => {
    
    let infoApi = (await axios.get(`http://localhost:5000/drivers/`)).data;
    console.log(infoApi);
    let infoDrivers = infoApi.map(function (elemento) {
        return {
            Name : elemento.name.forename,
           Surname : elemento.name.surname,
           Description : elemento.description,
           img : elemento.image.url,
           Nationality : elemento.nationality,
           dob : elemento.dob,
           Nameteam : elemento.teams,
           Create : false
          }
    })
    const filtrar = infoDrivers.filter((driver) => {
      return driver.Name === name;
})
let infoDB = await drivers.findAll({Where: {name :{[Op.eq] : name}}});

    return [...filtrar,...infoDB];
}

module.exports = GetDriverByName;

