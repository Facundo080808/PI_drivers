const driversroute = require("express").Router();
const { postDrivers, Getdrivers, GetIdDrivers, GetnameDrivers } = require("../Handlers/DriversHandlers");



driversroute.get("/", Getdrivers);
driversroute.get("/:id",GetIdDrivers );
driversroute.get("/name/:name", GetnameDrivers);
driversroute.post("/", postDrivers);
module.exports = driversroute;