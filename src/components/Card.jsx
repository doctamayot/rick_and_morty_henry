/* eslint-disable react/prop-types */

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
      <button onClick={onClick}>X</button>
      <img src={image} alt="irick" />
      <h2 className={styles.name}>{name}</h2>
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
