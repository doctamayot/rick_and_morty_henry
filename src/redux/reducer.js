const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      // eslint-disable-next-line no-case-declarations
      const updatedAllCharacters = [...state.allCharacters, payload];
      return {
        ...state,
        myFavorites: updatedAllCharacters,
        allCharacters: updatedAllCharacters,
      };
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (per) => per.id !== Number(payload)
        ),
        allCharacters: state.allCharacters.filter(
          (per) => per.id !== Number(payload)
        ),
      };
    case "FILTER":
      // eslint-disable-next-line no-case-declarations
      const filtrado = state.allCharacters.filter(
        (per) => per.gender === payload
      );
      return {
        ...state,
        myFavorites: filtrado,
      };

    case "ORDER":
      // eslint-disable-next-line no-case-declarations
      const ordered = [...state.allCharacters].sort((a, b) => {
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
