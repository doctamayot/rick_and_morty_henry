//Router
const router = require("express").Router();

//Controladores
const { getCharById } = require("../controllers/getCharbyId");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const login = require("../controllers/login");
const getChar = require("../controllers/getChar");

//Rutas
//Trae un Personaje de la api
router.post("/character", getChar);
//Trae El personaje que pida el usuario
router.get("/character/:id", getCharById);
//Hace el login
router.get("/login", login);
//inserta personaje en favoritos
router.post("/fav", postFav);
//Borra personaje de favoritos
router.delete("/fav/:id", deleteFav);

module.exports = router;
