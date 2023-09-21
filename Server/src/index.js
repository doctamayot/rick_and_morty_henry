const http = require("http");
const data = require("./utils/data");
const { getCharById } = require("./controllers/getCharbyId");

const PORT = 3001;

const server = http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const url = req.url;
    const partesURL = req.url.split("/");
    const id = partesURL.pop(); // Saca el ultimo de la url

    if (url.includes("/rickandmorty/character")) {
      return getCharById(res, id);
    }

    return res
      .writeHead(404, { "Content-Type": "application/json" })
      .end(JSON.stringify({ message: "Wrong Url" }));
  })
  .listen(PORT, "127.0.0.1", () =>
    console.log(`Funcionando en puerto ${PORT}`)
  );
