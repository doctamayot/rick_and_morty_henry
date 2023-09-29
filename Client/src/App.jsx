import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import axios from "axios";
import "./App.css";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Error404 from "./components/Error404.jsx";
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites.jsx";

import { useSelector, useDispatch } from "react-redux";

import { addChar, removeChar, removeFav } from "./redux/actions.js";

export function App() {
  //const [characters, setCharacters] = useState([]);
  const [error, setError] = useState({ status: false, msg: "" });
  const [loading, setLoading] = useState(false);
  const [access, setAccess] = useState(localStorage.getItem("access"));

  //const [favorites, setFavorites] = useState([]);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  //useSelector estados
  let myFavorites = useSelector((state) => state.myFavorites);
  let characters = useSelector((state) => state.characters);

  // useEffect(() => {
  //   setFavorites(myFavorites);
  // }, [myFavorites]);

  useEffect(() => {
    const accessNav = localStorage.getItem("access");

    if (accessNav === "true") {
      navigate("/home");
    }
    if (accessNav === "false") {
      navigate("/");
    }
  }, [access]);

  const errores = <h4 className="error">{error.msg}</h4>;

  const onSearch = async (id) => {
    setLoading(true);

    const idNumero = id;
    if (characters.find((char) => char.id === idNumero)) {
      setError({ status: true, msg: "El personaje random ya existe" });
      setLoading(false);
      return;
    }
    try {
      dispatch(addChar(id));
      setLoading(false);
      //setCharacters([...characters, data]);
      setError({ ...error, status: false });
    } catch (error) {
      setLoading(false);
      setError({ status: true, msg: error.response.data.message });
    }
  };

  const onClose = (id) => {
    dispatch(removeChar(id));
    dispatch(removeFav(id));
  };

  const login = (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      localStorage.setItem("access", access);
      access && navigate("/home");
    });
  };

  return (
    <div className="App">
      <h1 style={{ fontSize: "90px", color: "#fff" }}>Rick & Morty</h1>
      {pathname === "/" ? null : (
        <div>
          <Nav
            onSearch={onSearch}
            characters={characters}
            setError={setError}
            setLoading={setLoading}
            setAccess={setAccess}
          ></Nav>
          <div>
            {characters.length === 0 && (
              <h3 className="nohayper">No hay personajes aun!</h3>
            )}
          </div>
        </div>
      )}

      {error.status && errores}
      {loading && (
        <div className="barra_de_progreso_container">
          <h3>Buscando Personaje</h3>
          <div className="barra_de_progreso"></div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/favorites"
          element={<Favorites myFavorites={myFavorites} onClose={onClose} />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
