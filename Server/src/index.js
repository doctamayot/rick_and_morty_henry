
const server = require("./app");
const PORT = 3001;
const db = require("../src/db/db_connection")

db.sync({ force: true });
console.log("Conectado a BD")
server.listen(PORT, () => console.log(`Funcionando en puerto ${PORT}`));
