/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, characters, setError, setLoading }) => {
  const handleClick = (event) => {
    const idNumero = parseInt(event.target.firstChild.value);

    if (characters.find((char) => char.id === idNumero)) {
      setError({ status: true, msg: "El personaje ya existe" });
      setLoading(false);
      return;
    }
    const numeroRandom = Math.floor(Math.random() * 800) + 1;
    onSearch(numeroRandom);
  };
  return (
    <div>
      <div className={styles.container_nav}>
        <div className={styles.container_navlink}>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : "unactive")}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "unactive")}
          >
            About
          </NavLink>
        </div>
        <button className={styles.boton_rojo} onClick={handleClick}>
          Agrega uno Random
        </button>
      </div>
      <SearchBar
        onSearch={onSearch}
        characters={characters}
        setError={setError}
        setLoading={setLoading}
      />
    </div>
  );
};

export default Nav;
