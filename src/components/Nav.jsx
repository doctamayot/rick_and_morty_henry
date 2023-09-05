/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";

const Nav = ({ onSearch, characters }) => {
  const handleClick = (event) => {
    console.log(event.target.firstChild.value);
    const idNumero = parseInt(event.target.firstChild.value);

    if (characters.find((char) => char.id === idNumero)) {
      alert("El personaje ya existe");
      return;
    }
    const numeroRandom = Math.floor(Math.random() * 100) + 1;
    onSearch(numeroRandom);
  };
  return (
    <div>
      <button onClick={handleClick}>Random</button>
      <SearchBar onSearch={onSearch} characters={characters} />
    </div>
  );
};

export default Nav;
