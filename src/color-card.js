import classes from "./color-card.module.scss";
import classnames from "classnames";

import { useState } from "react";

function ColorCard({ name, year, color, pantone_value, className }) {
  const style = {
    backgroundColor: color,
  };
  const [active, setActive] = useState(false);
  const copyColor = () => {
    navigator.clipboard.writeText(color);
    console.log();
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 3000);
  };

  return (
    <div
      className={classnames(
        classes.card,
        className,
        active ? classes.clicked : ""
      )}
      style={style}
      onClick={copyColor}
    >
      <span className={classes.year}>{year}</span>
      <h4 className={classes.name}>{name}</h4>
      <h3 className={classes.color}>{color}</h3>
      <span className={classes.pantone}>{pantone_value}</span>
      <h3 className={classes.successCopy}>¡Copiado!</h3>
    </div>
  );
}

export default ColorCard;
