import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import axios from "axios";
import "./App.css";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Error404 from "./components/Error404.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState({ status: false, msg: "" });
  const [loading, setLoading] = useState(false);

  const errores = <h4 className="error">{error.msg}</h4>;

  const onSearch = (id) => {
    setLoading(true);

    const idNumero = parseInt(id);
    if (characters.find((char) => char.id === idNumero)) {
      setError({ status: true, msg: "El personaje random ya existe" });
      setLoading(false);

      return;
    }
    setTimeout(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          setCharacters([...characters, data]);
          setError({ ...error, status: false });
        })
        .catch(() => {
          setLoading(false);
          setError({ status: true, msg: "No existe personaje con ese id" });
          setTimeout(() => {
            setError({ status: false, msg: "No existe personaje con ese id" });
          }, 3000);

          return;
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1500);
  };

  const onClose = (id) => {
    const res = characters.filter((char) => char.id !== id);
    setCharacters(res);
  };

  return (
    <div className="App">
      <h1 style={{ fontSize: "90px", color: "#fff" }}>Rick & Morty</h1>
      <Nav
        onSearch={onSearch}
        characters={characters}
        setError={setError}
        setLoading={setLoading}
      ></Nav>
      {characters.length === 0 && (
        <h3 className="nohayper">No hay personajes aun!</h3>
      )}
      {error.status && errores}
      {loading && (
        <div className="barra_de_progreso_container">
          <h3>Buscando Personaje</h3>
          <div className="barra_de_progreso"></div>
        </div>
      )}

      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
