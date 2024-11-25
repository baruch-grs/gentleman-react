import { useState } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alejandro");
  const countMore = () => {
    setCount((count) => count + 1);
  };

  const changeName = () => {
    setName("Juan");
  };
  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore}></Button>
      <p>{name}</p>
      <Button label={`Change Name`} parentMethod={changeName}></Button>
    </>
  );
}

export default App;
