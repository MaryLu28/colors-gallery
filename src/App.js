import classes from "./App.module.scss";
import Button from "react-bootstrap/Button";

import ColorCard from "./color-card";

import useFetch from "use-http";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const {
    loading,
    error,
    data = [],
  } = useFetch(`https://reqres.in/api/colors?page=${count}`, [count]);
  const pages = data.total_pages;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.cardsContainer}>
        {error && error.message}
        {loading && "Loading..."}
        {data &&
          data.data?.map((item) => (
            <ColorCard className={classes.colorCard} {...item} />
          ))}
      </div>
      <div className={classes.btnsContainer}>
        <Button
          variant="primary"
          onClick={() => setCount(count - 1)}
          disabled={count == 1}
        >
          Anterior
        </Button>
        <Button
          variant="primary"
          onClick={() => setCount(count + 1)}
          disabled={count == pages}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}

export default App;
