//const { createDriver } = require("../Controllers/GetDrivers.controllers");
const GotDrivers = require("../Controllers/GetDrivers.controller");
const IdController = require("../Controllers/GetIdDrivers.controller");
const { createDriver } = require("../Controllers/PostDrivers.controllers");
//const {NameDriver} = require("../Controllers/GetNameDriver.controllers");
const NameDriver = require("../Controllers/GetNameDriver.controllers");
const GetDriverByName = require("../Controllers/GetNameDriver.controllers");

const Getdrivers = async (req, res) => {
try {
    const response = await GotDrivers();
    res.status(200).json(response);
} catch (error) {
    res.status(400).json(error.message);
}
    
};
const GetIdDrivers = async(req, res) => {
    const {id} = req.params;
    const src = isNaN(id) ? "bdd" : "api";

    if (!id) res.status(400).send("No id provided");
   try {
    const response = await IdController(id , src)
    res.status(200).json(response) 
   } catch (error) {
    res.status(400).json(error.message);
   }

};

const GetnameDrivers = async (req, res) => {
    const name = req.params.name;
   
    if (!name) res.status(400).send("No name provided");
try {
    const response = await GetDriverByName(name);
    res.status(200).json(response);
} catch (error) {
 res.status(404).send(error.message);
}
} 
;

const postDrivers = async (req, res) => {
    const {name, description , image , nacionalidad , fechadenacimiento,nameTeam} = req.body;
    try {
        const response = await createDriver(name , description , image , nacionalidad , fechadenacimiento,nameTeam);
        res.status(200).json(response); 
    } catch (error) {
        res.status(400).json(error.message);
    }
    
};
module.exports = {Getdrivers , GetIdDrivers , GetnameDrivers , postDrivers};