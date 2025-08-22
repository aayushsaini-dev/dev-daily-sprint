import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 rounded-md p-3">vite with react</h1>
      <Card username="Aayush"/>
      <Card username="Anjali" post="saini"/>
      <Card />
    </>
  );
}

export default App;
