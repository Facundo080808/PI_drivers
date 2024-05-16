const teamHandler = require("../Handlers/TeamsHandlers");

const teamsrouter = require("express").Router();

teamsrouter.get("/", teamHandler)
module.exports = teamsrouter; 