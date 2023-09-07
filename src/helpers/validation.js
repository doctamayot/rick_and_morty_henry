export const validators = (campo, valor) => {
  switch (campo) {
    case "email":
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor)) {
        return "El nombre de usuario tiene que ser un email";
      } else if (valor.length < 1) {
        return "El nombre de usuario no puede estar vacío.";
      } else if (valor.length > 35) {
        return "El nombre de usuario no puede tener más de 35 caracteres.";
      }
      break;
    case "password":
      if (valor < 1) {
        return "La contraseña tiene que tener al menos un número.";
      } else if (!(valor.length < 11 && valor.length > 5)) {
        return "La contraseña tiene que tener una longitud entre 6 y 10 caracteres.";
      }
      break;

    default:
      break;
  }
};
