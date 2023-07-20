import { useEffect, useState } from "react";
import "./App.css";
import Rhythm from "./components/Rhythm";
import Timer from "./components/Timer";
import DeviceOrientation, { Orientation } from "react-screen-orientation";

function App() {
  const [start, setStart] = useState(false);
  const [goFull, setGoFull] = useState(false);

  // const [stop, setStop] = useState(false);

  // const startHandler = () => {
  //   setStart(new Date().getTime());
  // };
  // useEffect(() => {
  //   setStart(new Date().getTime());
  // }, []);

  // const stopHandler = () => {
  //   setStop(true);
  // };

  useEffect(() => {
    if (!goFull) return;
    const appContainer = document.getElementById("appContainer");
    console.log(appContainer);

    if (appContainer?.requestFullscreen) {
      appContainer?.requestFullscreen();
    } else if (appContainer?.mozRequestFullscreen) {
      appContainer?.mozRequestFullscreen();
    } else if (appContainer?.webkitRequestFullscreen) {
      appContainer?.webkitRequestFullscreen();
    } else if (appContainer?.msRequestFullscreen) {
      appContainer?.msRequestFullscreen();
    }
    // Screen.orientation.lock("landscape");
  }, [goFull]);

  return (
    // <DeviceOrientation lockOrientation={"landscape"}>
    //   {/* Will only be in DOM in landscape */}
    //   <Orientation orientation="landscape" alwaysRender={false}>
    //     <div id="ris">
    //       <Rhythm start={start} />
    //       <Timer start={start} />
    //       <button onClick={startHandler}>Start</button>
    //     </div>
    //   </Orientation>
    //   {/* Will stay in DOM, but is only visible in portrait */}
    //   <Orientation orientation="portrait">
    //     <div>
    //       <p>Please rotate your device</p>
    //       <button onClick={(e) => setGoFull(true)}>click here</button>
    //     </div>
    //     {goFull && (
    //       <div id="ris">
    //         <Rhythm start={start} />
    //         <Timer start={start} />
    //         <button onClick={startHandler}>Start</button>
    //       </div>
    //     )}
    //   </Orientation>
    // </DeviceOrientation>

    <div id="appContainer">
      {goFull && (
        <>
          <Rhythm start={start} />
          <Timer start={start} />
          {/* <button onClick={startHandler}>Start</button> */}
        </>
      )}
      {!goFull && (
        <button
          className="btn"
          onClick={(e) => {
            setGoFull(true);
            setStart(new Date().getTime());
          }}
        >
          Start
        </button>
      )}
      {/* <button onClick={stopHandler}>Stop</button> */}
    </div>
  );
}

export default App;
