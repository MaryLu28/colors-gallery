import "./App.scss";

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

  console.log(data.data);

  return (
    <div className="App">
      <div>
        {error && error.message}
        {loading && "Loading..."}
        {data && data.data?.map((item) => <ColorCard {...item} />)}
      </div>
      <button onClick={() => setCount(count - 1)}>Anterior</button>
      <button onClick={() => setCount(count + 1)}>Siguiente</button>
    </div>
  );
}

export default App;
