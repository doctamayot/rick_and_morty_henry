const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");

//Levantamos el servidor
const server = express();

//Morgan para ver los llamados 
server.use(morgan("dev"));

//CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Leer las respuestas JSON
server.use(express.json());

//Rutas
server.use("/rickandmorty", routes);

module.exports = server;
