
const {alospits , drivers} = require("../db.js")
const axios = require('axios');
const getTeam = async () => {
    let teams = await alospits.findAll({include:{
        model:drivers
    }});
    const infoClean = teams.map(function (elemento) {
        return {
            id: elemento.id,
            Teams : elemento.name
        }})
        return teams;
}




   




module.exports = getTeam
  