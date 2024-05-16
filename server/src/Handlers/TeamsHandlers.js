const getTeam = require("../Controllers/GetTeams.controllet")

const teamHandler = async(req, res) => {
    try {
        const response = await getTeam();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
    
}
module.exports = teamHandler