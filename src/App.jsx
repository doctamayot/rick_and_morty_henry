import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const idNumero = parseInt(id);
    if (characters.find((char) => char.id === idNumero)) {
      alert("El personaje ya existe");

      return;
    }
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        setCharacters([...characters, data]);
      })
      .catch(() => {
        alert("No existe personaje con ese id");
        return;
      });
  };

  const onClose = (id) => {
    const res = characters.filter((char) => char.id !== id);
    setCharacters(res);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} characters={characters}></Nav>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
