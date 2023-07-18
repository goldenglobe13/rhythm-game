import { useState } from "react";
import "./App.css";
import Rhythm from "./components/Rhythm";
import Timer from "./components/Timer";

function App() {
  const [start, setStart] = useState(false);

  // const [stop, setStop] = useState(false);
  const startHandler = () => {
    setStart(new Date().getTime());
  };

  // const stopHandler = () => {
  //   setStop(true);
  // };
  return (
    <div>
      <Rhythm start={start} />
      <Timer start={start} />
      <button onClick={startHandler}>Start</button>
      {/* <button onClick={stopHandler}>Stop</button> */}
    </div>
  );
}

export default App;
