const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getChar = async (req, res) => {
  const charId = req.body.id;
  console.log(req.body);
  try {
    const { data } = await axios(URL + charId);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ message: "No existe personaje con ese Id" });
  }
};

module.exports = getChar;
