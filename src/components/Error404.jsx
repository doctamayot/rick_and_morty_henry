import { NavLink } from "react-router-dom";
import styles from "./Error404.module.css"; // Agrega tus estilos CSS personalizados aquí

const Error404 = () => {
  return (
    <div className={styles.error_container}>
      <div className={styles.error_content}>
        <h1>¡Oops! Página no encontrada</h1>
        <p>La página que estás buscando no existe.</p>
        <p>Puedes volver a la página de inicio o verificar la URL.</p>
        <NavLink to="/home" className={styles.link}>
          Volver a la página de inicio
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;
