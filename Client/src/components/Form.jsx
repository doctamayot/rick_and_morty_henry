import styles from "./Form.module.css";
import image from "../assets/fondo.webp";
import { useState } from "react";
import { validators } from "../helpers/validation.js";

// eslint-disable-next-line react/prop-types
const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "El nombre de usuario no puede estar vacío.",
    password: "La contraseña tiene que tener al menos un número.",
  });

  const [errorLogin, setErrorLogin] = useState("");

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    const resp = validators(e.target.name, e.target.value);
    setErrors({
      ...errors,
      [e.target.name]: resp,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resp = login(userData);
    setErrorLogin(resp);
  };

  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
        <h2>Iniciar Sesión</h2>
        <img src={image} width="400px" alt="rick"></img>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={userData.email}
              className={styles.form_control}
              onChange={handleChange}
            />
            <p className="errores">{errors.email && errors.email}</p>
          </div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            className={styles.form_control}
            onChange={handleChange}
            autoComplete="true"
          />
          <p className="errores">{errors.password && errors.password}</p>
          <p className="errores">{errorLogin}</p>
          {!errors.email && !errors.password && (
            <button type="submit" className={styles.btn}>
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
