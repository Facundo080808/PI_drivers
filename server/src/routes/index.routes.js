const router = require("express").Router();
const morgan = require("morgan");
const driversroute = require("./GetDrivers.routes");
const teamsrouter = require("./GetTeams");


router.use("/drivers", driversroute)

router.use("/teams", teamsrouter)





module.exports = router;
