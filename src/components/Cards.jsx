/* eslint-disable react/prop-types */
import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {characters.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          status={item.status}
          species={item.species}
          gender={item.gender}
          origin={item.origin.name}
          image={item.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
