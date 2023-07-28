import { useState } from "react";
import "./Rhythm.css";
import Papa from "papaparse";

// const r = document.querySelector(":root");
// let Y = 339.86;
let Y = 335.196;

function exportToCsv(filename, rows) {
  var processRow = function (row) {
    var finalVal = "";
    for (var j = 0; j < row.length; j++) {
      var innerValue = row[j] === null ? "" : row[j].toString();
      if (row[j] instanceof Date) {
        innerValue = row[j].toLocaleString();
      }
      var result = innerValue.replace(/"/g, '""');
      if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
      if (j > 0) finalVal += ",";
      finalVal += result;
    }
    return finalVal + "\n";
  };

  var csvFile = "";
  for (var i = 0; i < rows.length; i++) {
    csvFile += processRow(rows[i]);
  }

  var blob = new Blob([csvFile], { type: "text/csv;charset=utf-8;" });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
let notesDispNew = [];
// let notesNew = [];
let notesToPersNew = [];
const notesDisp = [];
let notes = [];
const notesToPers = [];

const RhythmRec = ({ start }) => {
  const [list, setList] = useState([]);
  const [newBeats, setNewBeats] = useState([
    ["x", "y", "time", "type", "endId"],
  ]);
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  const [eList, setEList] = useState([]);
  const [cList, setCList] = useState([]);
  // const [permList, setPermList] = useState([]);

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    console.log(e);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setArray(results.data);
      },
    });
  };

  const exporthandler = (e) => {
    e.preventDefault();
    console.log(newBeats);
    exportToCsv("aaaa", newBeats);
  };

  console.log(array);
  console.log(newBeats);
  console.log(notesDispNew);
  console.log(notes);
  console.log(notesToPersNew);
  console.log(notesDisp);
  console.log(notesToPers);

  const screenH = window.screen.height;
  console.log(screenH);

  const checkHandler = (e) => {
    e.preventDefault();
    let idList = [];
    if (array.length === 0) return;
    console.log(array);

    if (notesToPersNew.length !== array.length) {
      let counter = 0;
      array.forEach((item, i) => {
        idList = [...idList, i + counter + 1];
        if (item.type === "startSlide" || item.type === "holdSlide") {
          counter++;
        }
      });
      console.log(idList);
      counter = 0;
      array.forEach((item, i) => {
        notesToPersNew = [
          ...notesToPersNew,
          {
            x: item.x,
            time: item.time,
            id: i + counter + 1,
            endId: Number(item.endId) === 0 ? 0 : idList[+item.endId - 1],
            type: item.type,
            newType: item.type,
          },
        ];
        if (item.type === "startSlide" || item.type === "holdSlide") {
          counter++;
        }
      });
    }
    setEList(notesToPersNew);
    console.log(notesToPersNew);

    // const divsListE = [...document.getElementById("divsListE").children];
    // console.log(eList);
    // if (divsListE.length === 0) return;

    // // const mappedE = divsListE.map((item) => item.getBoundingClientRect());
    // const mappedDivsListE = divsListE.map((item) => {
    //   const dimensions = item.getBoundingClientRect();
    //   const x = dimensions.x + dimensions.width / 2;
    //   const y = dimensions.y + dimensions.height / 2;
    //   return { x, y };
    // });
    // // console.log(divsListE);
    // // console.log(mappedE);
    // console.log(mappedDivsListE);

    // const newArr = notesToPersNew.map((item, i) => {
    //   return { ...item, x: mappedDivsListE[i].x };
    // });

    setCList(notesToPersNew);
    if (cList.length === 0) return;

    const divsList = [...document.getElementById("divsList").children];
    // const mapped = divsList.map((item) => item.getBoundingClientRect());
    const mappedDivsList = divsList.map((item) => {
      const dimensions = item.getBoundingClientRect();
      const x = dimensions.x + dimensions.width / 2;
      const y = dimensions.y + dimensions.height / 2;
      return { x, y };
    });
    // exportToCsv("hhhh", mappedDivsList);

    if (notes.length === 0) {
      notes = cList.map((item, i) => {
        return { ...item, x: mappedDivsList[i].x };
      });
    }

    Y = mappedDivsList[0].y;

    // console.log(mapped);
    // console.log(divsList);
    console.log(mappedDivsList);
    console.log(notes);
    console.log(Y);

    var json_notes = JSON.stringify(notes);

    console.log(json_notes);

    // var my_notes = JSON.parse(
    //   `[{"x":568.1947937011719,"time":"0","id":1,"endId":"0","type":"tap","newType":"tap"},{"x":216.0547103881836,"time":"464","id":2,"endId":"0","type":"tap","newType":"tap"},{"x":573.7751922607422,"time":"930","id":3,"endId":"0","type":"startSlide","newType":"startSlide"},{"x":574.7017288208008,"time":"1701","id":4,"endId":"0","type":"endSlide","newType":"endSlide"},{"x":215.4370346069336,"time":"2137","id":5,"endId":"0","type":"startSlide","newType":"startSlide"},{"x":215.4370346069336,"time":"2898","id":6,"endId":"0","type":"endSlide","newType":"endSlide"},{"x":574.7017288208008,"time":"3298","id":7,"endId":"0","type":"startSlide","newType":"startSlide"},{"x":430.87894439697266,"time":"3883","id":8,"endId":"0","type":"holdSlide","newType":"holdSlide"},{"x":586.1607284545898,"time":"4306","id":9,"endId":"0","type":"endSlide","newType":"endSlide"},{"x":215.4370346069336,"time":"4727","id":10,"endId":"0","type":"startSlide","newType":"startSlide"},{"x":374.47977447509766,"time":"5211","id":11,"endId":"0","type":"holdSlide","newType":"holdSlide"},{"x":213.275146484375,"time":"5677","id":12,"endId":"0","type":"endSlide","newType":"endSlide"}]`
    // );

    // console.log(my_notes);

    if (cList.length === 0) return;
    let counter = 0;
    array.forEach((item, i) => {
      idList = [...idList, i + counter + 1];
      if (item.type === "startSlide" || item.type === "holdSlide") {
        counter++;
      }
    });
    console.log(idList);
    let counterNew = 0;
    cList.forEach((item, i) => {
      if (item.type === "tap" || item.type === "endSlide") {
        notesDispNew = [
          ...notesDispNew,
          {
            x: item.x,
            time: item.time,
            id: notesDispNew.length + 1,
            endId: Number(item.endId),
            type: item.type,
            newType: item.type,
          },
        ];
      } else {
        notesDispNew = [
          ...notesDispNew,
          {
            x: item.x,
            time: item.time,
            id: notesDispNew.length + 1,
            endId: Number(item.endId),
            type: item.type,
            newType: item.type,
          },
          {
            h: true,
            x1: item.x,
            x2: cList[notesDispNew.length - counterNew + 1].x,
            time: item.time,
            id: notesDispNew.length + 2,
            dTime: cList[notesDispNew.length - counterNew + 1].time - item.time,
          },
        ];
        counterNew++;
      }
    });
    console.log(notesDispNew);

    var json_notesDispNew = JSON.stringify(notesDispNew);

    console.log(json_notesDispNew);

    // var my_notesDispNew = JSON.parse(
    //   `[{"x":568.1947937011719,"time":"0","id":1,"endId":"0","type":"tap","newType":"tap"},{"x":216.0547103881836,"time":"464","id":2,"endId":"0","type":"tap","newType":"tap"},{"x":573.7751922607422,"time":"930","id":3,"endId":"0","type":"startSlide","newType":"startSlide"},{"h":true,"x1":573.7751922607422,"x2":"592.4663086","time":"930","id":4,"dTime":771},{"x":574.7017288208008,"time":"1701","id":5,"endId":"0","type":"endSlide","newType":"endSlide"},{"x":215.4370346069336,"time":"2137","id":6,"endId":"0","type":"startSlide","newType":"startSlide"},{"h":true,"x1":215.4370346069336,"x2":"183.182312","time":"2137","id":7,"dTime":761},{"x":215.4370346069336,"time":"2898","id":8,"endId":"0","type":"endSlide","newType":"endSlide"},{"x":574.7017288208008,"time":"3298","id":9,"endId":"0","type":"startSlide","newType":"startSlide"},{"h":true,"x1":574.7017288208008,"x2":"430.3520508","time":"3298","id":10,"dTime":585},{"x":430.87894439697266,"time":"3883","id":11,"endId":"0","type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":430.87894439697266,"x2":"605.9153442","time":"3883","id":12,"dTime":423},{"x":586.1607284545898,"time":"4306","id":13,"endId":"0","type":"endSlide","newType":"endSlide"},{"x":215.4370346069336,"time":"4727","id":14,"endId":"0","type":"startSlide","newType":"startSlide"},{"h":true,"x1":215.4370346069336,"x2":"368.9230957","time":"4727","id":15,"dTime":484},{"x":374.47977447509766,"time":"5211","id":16,"endId":"0","type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":374.47977447509766,"x2":"180.6379395","time":"5211","id":17,"dTime":466},{"x":213.275146484375,"time":"5677","id":18,"endId":"0","type":"endSlide","newType":"endSlide"}]`
    // );

    // console.log(my_notesDispNew);
  };

  const touchStartHandler = (e) => {
    const dur = new Date().getTime() - start;
    console.log("start");
    console.log(e);

    setList((prevState) => [...prevState, ...e.changedTouches]);
    console.log([
      e.changedTouches[0].pageX,
      e.changedTouches[0].pageY,
      dur,
      "startSlide",
    ]);
    setNewBeats((prevState) => [
      ...prevState,
      [
        e.changedTouches[0].pageX,
        e.changedTouches[0].pageY,
        dur,
        "tap",
        0,
        e.changedTouches[0].identifier,
      ],
    ]);
  };

  const touchMoveHandler = (e) => {
    const dur = new Date().getTime() - start;
    // console.log("Move");
    const ch = [...e.changedTouches].map((item) => item.identifier);
    if (ch.length === 0) return;
    setList((prevState) =>
      [...prevState].map((item, i) => {
        const k = [...e.changedTouches].filter(
          (touch) => item.identifier === touch.identifier
        );
        return ch.includes(item.identifier) ? k[0] : item;
      })
    );
    console.log([
      e.changedTouches[0].pageX,
      e.changedTouches[0].pageY,
      dur,
      "holdSlide",
    ]);
    // setNewBeats((prevState) => [
    //   ...prevState,
    //   [
    //     e.changedTouches[0].pageX,
    //     e.changedTouches[0].pageY,
    //     dur,
    //     "holdSlide",
    //     0,
    //     e.changedTouches[0].identifier,
    //   ],
    // ]);
  };

  const touchEndHandler = (e) => {
    const dur = new Date().getTime() - start;
    console.log("end");

    const ch = [...e.changedTouches].map((item) => item.identifier);
    if (ch.length === 0) return;
    setList((prevState) => {
      return [...prevState].filter(
        (item) => item.identifier !== e.changedTouches[0].identifier
      );
    });

    console.log([
      e.changedTouches[0].pageX,
      e.changedTouches[0].pageY,
      dur,
      0,
      "endSlide",
    ]);

    setNewBeats((prevState) => [
      ...prevState,
      [
        e.changedTouches[0].pageX,
        e.changedTouches[0].pageY,
        dur,
        "endSlide",
        e.changedTouches[0].identifier,
      ],
    ]);
  };

  return (
    <>
      <button className="check" onClick={checkHandler}>
        Check!
      </button>
      <form>
        <input
          className="input"
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          className="import"
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
      </form>
      <button className="export" onClick={exporthandler}>
        Export
      </button>
      <div className="bigContainer">
        <div className="touchContainer">
          <div
            className="playArea"
            onTouchStart={touchStartHandler}
            onTouchEnd={touchEndHandler}
            onTouchMove={touchMoveHandler}
          ></div>

          <div id="divsList">
            {cList.map((item, i) => {
              return (
                <div
                  key={item.id}
                  style={{ left: `${item.x}px`, top: `88.55%` }}
                  // style={{ left: `${item.x}px`, top: `696px` }}
                  className={"Cdot"}
                ></div>
              );
            })}
          </div>
          <div id="divsListE">
            {eList.map((item, i) => {
              return (
                <div
                  key={item.id}
                  style={{ left: `${item.x}px`, top: `200px` }}
                  // className={holdingEffect ? "dot holdEffect" : "dot"}
                  className={"Edot"}
                ></div>
              );
            })}
          </div>
          {list.map((touch, i) => {
            return (
              <div
                style={{ left: `${touch.pageX}px`, top: `${touch.pageY}px` }}
                // className={holdingEffect ? "dot holdEffect" : "dot"}
                className={"dot"}
                id={touch.identifier}
                key={touch.identifier}
              ></div>
            );
          })}

          {start &&
            notesDispNew.map((item, i) => {
              if (item.h) {
                return (
                  <svg
                    className="lineA"
                    id={item.id}
                    key={item.id}
                    style={{
                      "--1-slide-top": `calc((1600px + ${item.dTime}px)*3/6 + 0px)`,
                      width: "1000",
                      height: "10000",
                      animationDelay: `${item.time}ms`,
                      top: `0px`,
                      animationDuration: `calc(var(--base-duration) + ${item.dTime}ms)`,
                    }}
                  >
                    <line
                      className="lineStroke"
                      x1={item.x2}
                      y1={5000 - (item.dTime * 3) / 6}
                      x2={item.x1}
                      y2="5000"
                    ></line>
                  </svg>
                );
              } else {
                return (
                  <div
                    onTouchStart={touchStartHandler}
                    onTouchEnd={touchEndHandler}
                    onTouchMove={touchMoveHandler}
                    onClick={(e, id) => {
                      console.log(item.id);
                      console.log(e);
                      e.preventDefault();
                    }}
                    key={item.id}
                    id={item.id}
                    className={
                      item.newType === "tap" ? "Bdot BdotB" : "Bdot BdotY"
                    }
                    style={{
                      left: `${item.x}px`,
                      animationDelay: `${item.time}ms`,
                    }}
                  ></div>
                );
              }
            })}
        </div>
      </div>
      <div className="xline"></div>
      <div className="yline1"></div>
      <div className="yline2"></div>
    </>
  );
};

export default RhythmRec;
