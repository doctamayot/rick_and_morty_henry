const initialState = {
  myFavorites: [],
  characters: [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CHARACTER":
      return {
        ...state,
        characters: [...state.characters, payload],
      };
    case "ADD_FAV":
      // eslint-disable-next-line no-case-declarations
      //const updatedAllCharacters = [...state.allCharacters, payload];
      return {
        ...state,
        myFavorites: payload,
        //allCharacters: updatedAllCharacters,
      };

    case "REMOVE_CHAR":
      // eslint-disable-next-line no-case-declarations
      const filtroBorrar = state.characters.filter((per) => per.id !== payload);

      return {
        ...state,
        characters: filtroBorrar,
      };

    case "REMOVE_FAV":
      // return { ...state, myFavorites: payload, allCharacters: payload };
      console.log(payload);
      return {
        ...state,
        myFavorites: payload,
      };
    case "FILTER":
      // eslint-disable-next-line no-case-declarations
      const filtered = state.myFavorites.filter(
        (per) => per.gender === payload
      );

      if (payload === "Todos") {
        return {
          ...state,
          myFavorites: state.myFavorites,
        };
      }
      return {
        ...state,
        myFavorites: filtered,
      };

    case "ORDER":
      // eslint-disable-next-line no-case-declarations
      const ordered = [...state.myFavorites].sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: ordered,
      };

    default:
      return { ...state };
  }
};
