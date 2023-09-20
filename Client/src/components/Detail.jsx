import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Detail.module.css";

const Detail = () => {
  const [error, setError] = useState({ status: false, msg: "" });
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
          setCharacter(data);
          setError({ ...error, status: false });
        })
        .catch(() => {
          setLoading(false);
          setError({ ...error, status: false });

          return;
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1500);
    return setCharacter({});
  }, []);

  return (
    <div>
      {loading && (
        <div className="barra_de_progreso_container">
          <h3>Buscando Info del Personaje</h3>
          <div className="barra_de_progreso"></div>
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.container_left}>
          <h1>{character.name}</h1>
          <h2>STATUS | {character.status}</h2>
          <h2>GENDER | {character.gender}</h2>
          <h2>SPECIE | {character.species}</h2>
          <h2>ORIGIN | {character.origin && character.origin.name}</h2>
        </div>
        <img
          src={character.image}
          alt={character.name}
          width="500px"
          className={styles.imagen}
        />
      </div>
    </div>
  );
};

export default Detail;
