/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styles from "./Card.module.css";
export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  const onClick = () => {
    onClose(id);
  };
  return (
    <div className={styles.container}>
      <button onClick={onClick} style={{ color: "white" }}>
        X
      </button>
      <img src={image} alt="irick" />
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
      </Link>
      <div className={styles.container_sub}>
        <div className={styles.container_skills}>
          <h2>Status:</h2>
          <span>{status}</span>
        </div>
        <div className={styles.container_skills}>
          <h2>Specie:</h2>
          <span>{species}</span>
        </div>
        <div className={styles.container_skills}>
          <h2>Gender:</h2>
          <span>{gender}</span>
        </div>
        <div className={styles.container_skills}>
          <h2>Origin:</h2>
          <span>{origin}</span>
        </div>
      </div>
    </div>
  );
}
