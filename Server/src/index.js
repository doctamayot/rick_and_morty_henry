const http = require("http");
const data = require("./utils/data");

const server = http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const url = req.url;

    if (url.includes("/rickandmorty/character")) {
      const partes = req.url.split("/");
      const id = partes.pop();

      const result = data.filter((per) => per.id === Number(id));

      res.end(JSON.stringify(result[0]));
    }
  })
  .listen(3001, "localhost");
