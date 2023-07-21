import { useEffect, useState } from "react";
import "./App.css";
import Rhythm from "./components/Rhythm";
import Timer from "./components/Timer";

function App() {
  const [start, setStart] = useState(false);
  const [goFull, setGoFull] = useState(false);

  // const [stop, setStop] = useState(false);

  const startHandler = () => {
    setStart(new Date().getTime());
  };
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
    window.screen.orientation.lock("landscape-secondary");
  }, [goFull]);

  return (
    <div id="appContainer">
      {goFull && (
        <>
          <Rhythm start={start} />
          <Timer start={start} />
          {!start && <button onClick={startHandler}>Start</button>}
        </>
      )}
      {!goFull && (
        <button
          className="btn"
          onClick={(e) => {
            setGoFull(true);
          }}
        >
          Play
        </button>
      )}
      {/* <button onClick={stopHandler}>Stop</button> */}
    </div>

    // <DeviceOrientation lockOrientation={"landscape"}>
    //   {/* Will only be in DOM in landscape */}
    //   <Orientation orientation="landscape" alwaysRender={false}>
    //     <div id="appContainer">
    //       {goFull && <div>Hi</div>}
    //       {!goFull && (
    //         <button
    //           className="btn"
    //           onClick={(e) => {
    //             setGoFull(true);
    //             setStart(new Date().getTime());
    //           }}
    //         >
    //           Start
    //         </button>
    //       )}
    //       {/* <button onClick={stopHandler}>Stop</button> */}
    //     </div>
    //   </Orientation>
    //   {/* Will stay in DOM, but is only visible in portrait */}
    //   <Orientation orientation="portrait">
    //     <div id="appContainer">
    //       {goFull && <div>Hi</div>}
    //       {!goFull && (
    //         <button
    //           className="btn"
    //           onClick={(e) => {
    //             setGoFull(true);
    //             setStart(new Date().getTime());
    //           }}
    //         >
    //           Start
    //         </button>
    //       )}
    //       {/* <button onClick={stopHandler}>Stop</button> */}
    //     </div>
    //   </Orientation>
    // </DeviceOrientation>
  );
}

export default App;
