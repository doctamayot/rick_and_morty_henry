import { useState } from "react";
import styles from "./SearchBar.module.css";

/* eslint-disable react/prop-types */
export default function SearchBar({
  onSearch,
  characters,
  setError,
  setLoading,
}) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();

    if (e.target.firstChild.value === "") {
      setError({ status: true, msg: "Debes escribir agun id" });
      return;
    }

    const idNumero = parseInt(id);

    if (characters.find((char) => char.id === idNumero)) {
      setError({ status: true, msg: "El personaje ya existe" });
      setId("");
      setLoading(false);
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
        placeholder="Ingrese el ID del personaje de Rick and Morty"
      />
      <button type="submit" className={styles.boton_agregar}>
        Agregar
      </button>
    </form>
  );
}
