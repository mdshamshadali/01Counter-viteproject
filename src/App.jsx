import { useState } from "react";
import "./App.css";

function App() {
  //let counter = 15

  let [counter, setCounter] = useState(0);

  const AddValue = () => {
    //counter = counter + 1
    //setCounter(counter + 1);
    setCounter(precounter => precounter + 1)
    setCounter(precounter => precounter + 1)
    setCounter(precounter => precounter + 1)
    setCounter(precounter => precounter + 1)
  };

  const RemoveValue = () => {
    //setCounter(counter - 1);
    setCounter(precounter => precounter - 1)
    setCounter(precounter => precounter - 1)
    setCounter(precounter => precounter - 1)
    setCounter(precounter => precounter - 1)
  };

  return (
    <>
      <h1>saim aur code</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={AddValue}>Add Value</button>
      <button onClick={RemoveValue}>Remove Value</button>
    </>
  );
}

export default App;
