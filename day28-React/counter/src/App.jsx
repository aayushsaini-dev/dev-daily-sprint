import { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;
  const addValue = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);   does not work as react dont send that immediatly
    // setCounter(counter + 1);
    setCounter((prev) => prev + 1); // now this works  as it have callback  so it should calculate first
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };
  const subValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React cousrse {counter}</h1>
      <h2>Counter value</h2>
      <button onClick={addValue}> Add value</button>{" "}
      <button onClick={subValue}> remove value</button>
      <p>footer:</p>
    </>
  );
}

export default App;
