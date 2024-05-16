const { Where } = require("sequelize/lib/utils");
const {drivers ,alospits } = require("../db.js");

const createDriver = async (name , description , image , nacionalidad , fechadenacimiento ,nameTeam) => {
   const newDriver = await drivers.create({name,description,image,nacionalidad ,fechadenacimiento});
    if(nameTeam && nameTeam.length > 0){
        const team = await alospits.findAll({
            where:{name:nameTeam},
            include:drivers
        })
        await newDriver.addAlospits(team)
    }
    return newDriver;
};
module.exports = {createDriver};