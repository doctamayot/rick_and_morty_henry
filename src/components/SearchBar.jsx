import { useState } from "react";
import styles from "./SearchBar.module.css";

/* eslint-disable react/prop-types */
export default function SearchBar({ onSearch, characters }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();

    if (e.target.firstChild.value === "") {
      alert("Debes escribir algo");
      return;
    }

    const idNumero = parseInt(id);

    if (characters.find((char) => char.id === idNumero)) {
      alert("El personaje ya existe");
      setId("");
      return;
    }

    onSearch(id);
    setId("");
  };
  return (
    <form onSubmit={onClick}>
      <input
        type="search"
        onChange={handleChange}
        value={id}
        className={styles.input_moderno}
      />
      <button type="submit" className={styles.boton_agregar}>
        Agregar
      </button>
    </form>
  );
}
