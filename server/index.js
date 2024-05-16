
const server = require("./src/server");
const { conn } = require('./src/db.js');
const {alospits} = require('./src/db.js')
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  (async function () {
    const datosApi = await(await fetch("http://localhost:5000/drivers")).json()
    for (const driver of datosApi) {
        alospits.create({
          id:driver.id,
          name:driver.teams??"team not defined"
        })
    }
    
  })();
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
