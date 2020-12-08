function ColorCard({ name, year, color, pantone_value }) {
  const style = {
    backgroundColor: color,
  };

  return (
    <div className="ColorCard" style={style}>
      <span>{year}</span>
      <h4>{name}</h4>
      <h3>{color}</h3>
      <span>{pantone_value}</span>
    </div>
  );
}

export default ColorCard;
