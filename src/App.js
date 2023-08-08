import { useEffect, useState } from "react";
import "./App.css";
import Rhythm from "./components/Rhythm";
import Timer from "./components/Timer";
import RhythmRec from "./components/RhythmRec";

function App() {
  const [start, setStart] = useState(false);
  const [goFull, setGoFull] = useState(false);
  const [ready, setReady] = useState(false);
  const [record, setRecord] = useState(false);

  // const [stop, setStop] = useState(false);

  const startHandler = () => {
    setStart(new Date().getTime());
    let audio = document.getElementById("nomb");
    audio.load();
    audio.playbackRate = 1;
    audio.play();
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
    console.log(appContainer?.requestFullscreen);
    console.log(appContainer?.mozRequestFullscreen);
    if (appContainer?.requestFullscreen) {
      appContainer?.requestFullscreen();
    } else if (appContainer?.mozRequestFullscreen) {
      appContainer?.mozRequestFullscreen();
    } else if (appContainer?.webkitRequestFullscreen) {
      appContainer?.webkitRequestFullscreen();
    } else if (appContainer?.msRequestFullscreen) {
      appContainer?.msRequestFullscreen();
    }
    window.screen.orientation.lock("landscape");
  }, [goFull]);

  return (
    <div id="appContainer">
      <audio id="nomb" src="./nomb.mp3"></audio>
      {goFull && !ready && !record && (
        <>
          <button
            className="rec"
            onClick={(e) => {
              e.preventDefault();
              setRecord(true);
            }}
          >
            Record
          </button>
          <button
            className="ready"
            onClick={(e) => {
              e.preventDefault();
              setReady(true);
            }}
          >
            Ready
          </button>
        </>
      )}
      {ready && (
        <>
          <Rhythm start={start} />
          <Timer start={start} />

          {!start && (
            <button className="start" onClick={startHandler}>
              Start
            </button>
          )}
          <button
            className="back"
            onClick={(e) => {
              e.preventDefault();
              setReady(false);
            }}
          >
            Back
          </button>
        </>
      )}
      {record && (
        <>
          <RhythmRec start={start} />
          <Timer start={start} />

          {!start && (
            <button className="start" onClick={startHandler}>
              Start
            </button>
          )}
          <button
            className="back"
            onClick={(e) => {
              e.preventDefault();
              setRecord(false);
            }}
          >
            Back
          </button>
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
