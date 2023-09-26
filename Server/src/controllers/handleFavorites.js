let myFavorites = [];

const postFav = (req, res) => {
  const personaje = req.body;
  myFavorites.push(personaje);
  res.status(201).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const UsersNew = myFavorites.filter((per) => per.id === Number(id));
  myFavorites = UsersNew;
  res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
