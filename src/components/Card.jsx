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
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h2>name:{name}</h2>
      <h2>status:{status}</h2>
      <h2>species:{species}</h2>
      <h2>gender:{gender}</h2>
      <h2>origin:{origin.name}</h2>

      <img src={image} alt="irick" />
    </div>
  );
}
