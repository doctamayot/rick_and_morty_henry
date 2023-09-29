const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios(URL + id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: "No existe personaje con ese Id" });
  }
};

module.exports = { getCharById };
