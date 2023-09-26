/* eslint-disable react/prop-types */
import Card from "./Card";

export default function Cards({ characters, onClose }) {
  const inverso = characters.slice().reverse();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        flexWrap: "wrap",
      }}
    >
      {inverso.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          name={item.name}
          status={item.status}
          species={item.species}
          gender={item.gender}
          origin={item.origin?.name}
          image={item.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
