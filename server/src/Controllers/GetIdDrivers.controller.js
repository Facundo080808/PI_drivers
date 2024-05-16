const { where } = require("sequelize");
const {drivers,alospits} = require("../db.js");
const axios = require("axios");

const IdController = async(id , src) => {
  
   if (src === "api") {
    let infoApi = await axios.get(`http://localhost:5000/drivers/${id}`);
    console.log(infoApi.data);
    let driver = infoApi.data;
    
   return {
    id : driver.id,
    Name : driver.name.forename,
   Surname : driver.name.surname,
   Description : driver.description,
   img : driver.image.url,
   Nationality : driver.nationality,
   dob : driver.dob,
   Create : false
   };       
}
else{
  return drivers.findOne({ where : {id},include: {model : alospits}})
}
}

module.exports = IdController;
//const driver = src === "api" ? await axios.get(`http://localhost:5000/drivers/${id}`) : await drivers.findByPk(id);