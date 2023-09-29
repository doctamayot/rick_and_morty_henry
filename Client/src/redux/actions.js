import axios from "axios";

export const addChar = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/character";
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, { id });
      return dispatch({
        type: "ADD_CHARACTER",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      return dispatch({
        type: "REMOVE_FAV",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender,
  };
};
export const orderCards = (orden) => {
  return {
    type: "ORDER",
    payload: orden,
  };
};
export const removeChar = (id) => {
  return {
    type: "REMOVE_CHAR",
    payload: id,
  };
};
