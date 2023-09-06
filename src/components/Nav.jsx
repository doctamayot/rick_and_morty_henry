/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";

const Nav = ({ onSearch, characters, setError, setLoading }) => {
  const handleClick = (event) => {
    const idNumero = parseInt(event.target.firstChild.value);

    if (characters.find((char) => char.id === idNumero)) {
      setError({ status: true, msg: "El personaje ya existe" });
      setLoading(false);
      return;
    }
    const numeroRandom = Math.floor(Math.random() * 100) + 1;
    onSearch(numeroRandom);
  };
  return (
    <div>
      <button className={styles.boton_rojo} onClick={handleClick}>
        Agrega uno Random
      </button>
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
