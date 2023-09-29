/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Favorites({ onClose }) {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    //console.log(e.target.value);
    dispatch(filterCards(e.target.value));
  };

  return (
    <>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Todos">Todos</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          flexWrap: "wrap",
        }}
      >
        {myFavorites.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            name={item.name}
            status={item.status}
            species={item.species}
            gender={item.gender}
            origin={item.origin}
            image={item.image}
            onClose={onClose}
          />
        ))}
      </div>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

export default Favorites;
