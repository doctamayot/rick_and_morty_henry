const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(URL + id)
    .then(({ data }) => {
      const { id, status, name, species, origin, image, gender } = data;
      //const character = { id, status, name, species, origin, image, gender };
      data
        ? res
            .status(200)
            .json({ id, status, name, species, origin, image, gender })
        : res.status(404).send("Not Found");
    })
    .catch((error) => res.status(500).send(error.message));

  // axios
  //   .get(`https://rickandmortyapi.com/api/character/${id}`)
  //   .then(({ data }) => {
  //     const objeto = {
  //       id: id,
  //       name: data.name,
  //       gender: data.gender,
  //       species: data.species,
  //       origin: data.origin,
  //       image: data.image,
  //       status: data.status,
  //     };

  //     return res
  //       .writeHead(200, { "Content-Type": "application/json" })
  //       .end(JSON.stringify(objeto));
  //   })
  //   .catch((err) => {
  //     res.writeHead(500, { "Content-Type": "text/plain" }).end(err.message);
  //   });
};

module.exports = { getCharById };
