import { useEffect, useState } from "react";
import "./Rhythm.css";
import { current } from "@reduxjs/toolkit";

// const r = document.querySelector(":root");
let Y = 339.86;
const quality = { accepted: 50, good: 25, perfect: 15 };
function diffPos(first, second, index) {
  const d = Math.abs(
    first[index].touch[0].pageX - second[0]?.x + first[index].touch[0].pageY - Y
  );
  return d;
}

function qualityCheck(diff) {
  let q = "";
  switch (true) {
    case diff < quality.perfect:
      q = "SuperPerfect";
      break;
    case diff < quality.good:
      q = "Perfect";
      break;
    case diff < quality.accepted:
      q = "Good";
      break;
    default:
      q = "Miss";
  }
  console.log(q);
  // const q =
  //   diff < quality.accepted
  //     ? diff < quality.good
  //       ? "Perfect"
  //       : "Good"
  //     : "Miss";
  return q;
}

// function exportToCsv(filename, rows) {
//   var processRow = function (row) {
//     var finalVal = "";
//     for (var j = 0; j < row.length; j++) {
//       var innerValue = row[j] === null ? "" : row[j].toString();
//       if (row[j] instanceof Date) {
//         innerValue = row[j].toLocaleString();
//       }
//       var result = innerValue.replace(/"/g, '""');
//       if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
//       if (j > 0) finalVal += ",";
//       finalVal += result;
//     }
//     return finalVal + "\n";
//   };

//   var csvFile = "";
//   for (var i = 0; i < rows.length; i++) {
//     csvFile += processRow(rows[i]);
//   }

//   var blob = new Blob([csvFile], { type: "text/csv;charset=utf-8;" });
//   if (navigator.msSaveBlob) {
//     // IE 10+
//     navigator.msSaveBlob(blob, filename);
//   } else {
//     var link = document.createElement("a");
//     if (link.download !== undefined) {
//       // feature detection
//       // Browsers that support HTML5 download attribute
//       var url = URL.createObjectURL(blob);
//       link.setAttribute("href", url);
//       link.setAttribute("download", filename);
//       link.style.visibility = "hidden";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   }
// }
const notesDisp = [
  { x: 620, time: 0, id: 1, type: "startSlide" },
  {
    h: true,
    x1: 620,
    x2: 420,
    time: 0,
    id: 2,
    dTime: 1000,
  },
  { x: 420, time: 1000, id: 3, endId: 1, type: "holdSlide" },
  {
    h: true,
    x1: 420,
    x2: 620,
    time: 1000,
    id: 4,
    dTime: 1000,
  },
  { x: 620, time: 2000, id: 5, endId: 1, type: "endSlide" },
  { x: 100, time: 0, id: 6, type: "startSlide" },
  {
    h: true,
    x1: 100,
    x2: 200,
    time: 0,
    id: 7,
    dTime: 1000,
  },
  { x: 200, time: 1000, id: 8, endId: 6, type: "holdSlide" },
  {
    h: true,
    x1: 200,
    x2: 100,
    time: 1000,
    id: 9,
    dTime: 1000,
  },
  { x: 100, time: 2000, id: 10, endId: 6, type: "endSlide" },
  { x: 150, time: 2500, id: 11, type: "startSlide" },
  { x: 650, time: 2500, id: 12, type: "startSlide" },
  { x: 130, time: 2700, id: 13, type: "startSlide" },
  { x: 600, time: 2900, id: 14, type: "startSlide" },
];

let notes = [
  { time: 0, id: 1, type: "startSlide" },
  { time: 1000, id: 3, endId: 1, type: "holdSlide" },
  { time: 2000, id: 5, endId: 1, type: "endSlide" },
  { time: 0, id: 6, type: "startSlide" },
  { time: 1000, id: 8, endId: 6, type: "holdSlide" },
  { time: 2000, id: 10, endId: 6, type: "endSlide" },
  { time: 2500, id: 11, type: "startSlide" },
  { time: 2500, id: 12, type: "startSlide" },
  { time: 2700, id: 13, type: "startSlide" },
  { time: 2900, id: 14, type: "startSlide" },
];

const notesToPers = [
  { x: 620, time: 0, id: 1, type: "startSlide" },
  { x: 420, time: 1000, id: 3, endId: 1, type: "holdSlide" },
  { x: 620, time: 2000, id: 5, endId: 1, type: "endSlide" },
  { x: 100, time: 0, id: 6, type: "startSlide" },
  { x: 200, time: 1000, id: 8, endId: 6, type: "holdSlide" },
  { x: 100, time: 2000, id: 10, endId: 6, type: "endSlide" },
  { x: 150, time: 2500, id: 11, type: "startSlide" },
  { x: 650, time: 2500, id: 12, type: "startSlide" },
  { x: 130, time: 2700, id: 13, type: "startSlide" },
  { x: 600, time: 2900, id: 14, type: "startSlide" },
];

const Rhythm = ({ start }) => {
  const [list, setList] = useState([]);
  const [acceptedList, setAcceptedList] = useState([]);
  const [beats, setBeats] = useState(notesDisp);
  const [currentAccepeted, setCurrentAccepeted] = useState([]);
  const [streak, setStreak] = useState("");
  // const [tapList, setTapList] = useState([]);
  // const [endList, setEndList] = useState([]);
  // // const [moveList, setMoveList] = useState([]);
  // const [holdList, setHoldList] = useState([]);
  // const [holdingEffect, setHoldingEffect] = useState(false);

  console.log(currentAccepeted);

  // console.log("Top");

  // console.log(beats);
  // console.log(list);

  console.log(acceptedList);

  useEffect(() => {
    const divsList = [...document.getElementById("divsList").children];
    const mapped = divsList.map((item) => item.getBoundingClientRect());
    const mappedDivsList = divsList.map((item) => {
      const dimensions = item.getBoundingClientRect();
      const x = dimensions.x + dimensions.width / 2;
      const y = dimensions.y + dimensions.height / 2;
      return { x, y };
    });
    // exportToCsv("hhhh", mappedDivsList);

    notes = notes.map((item, i) => {
      return { ...item, x: mappedDivsList[i].x };
    });
    Y = mappedDivsList[0].y;

    console.log(mapped);
    console.log(divsList);
    console.log(mappedDivsList);
    console.log(notes);
    console.log(Y);
  }, []);

  useEffect(() => {
    // const filteredAccepted = acceptedList.filter(
    //   (item) => item.quality === "Miss"
    // );
    // console.log(filteredAccepted);
    if (acceptedList.length === 0) return;
    if (acceptedList[acceptedList.length - 1]?.quality === "Miss") {
      console.log("heeee");
      setStreak("");
    } else {
      console.log("oooooool");
      setStreak((prevState) => Number(prevState) + 1);
    }
  }, [acceptedList]);

  const touchStartHandler = (e) => {
    const dur = new Date().getTime() - start;
    console.log("start");
    console.log(e);

    const divsList = [...document.getElementById("divsList").children];
    const mapped = divsList.map((item) => item.getBoundingClientRect());
    const mappedDivsList = divsList.map((item) => {
      const dimensions = item.getBoundingClientRect();
      const x = dimensions.x + dimensions.width / 2;
      const y = dimensions.y + dimensions.height / 2;
      return { x, y };
    });
    // exportToCsv("hhhh", mappedDivsList);

    notes = notes.map((item, i) => {
      return { ...item, x: mappedDivsList[i].x };
    });
    Y = mappedDivsList[0].y;

    console.log(mapped);
    console.log(divsList);
    console.log(mappedDivsList);
    console.log(notes);
    console.log(Y);

    setList((prevState) => [...prevState, ...e.changedTouches]);
    const tapList = [{ touch: [...e.changedTouches], dur: dur }];

    // const filteredTapListDur = notes.filter(
    //   (item) => Math.abs(item.time - tapList[0].dur) < 100
    // );
    // if (filteredTapListDur.length === 0) return;

    if (acceptedList.length < notes.length) {
      if (tapList.length > 0) {
        const filteredNotes = notes.filter(
          (item) =>
            item.id === Number(tapList[0]?.touch[0].target.id) &&
            item.type === "startSlide"
        );
        if (filteredNotes.length === 0) {
          return;
        }

        const filteredTapList = tapList.filter(
          (item) => item.touch[0].target.className === "Bdot"
        );

        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type === "startSlide"
            ? item?.touch[0]?.target.id ===
                filteredTapList[0]?.touch[0]?.target ||
              filteredTapList[1]?.touch[0]?.target
            : false
        );
        if (filteredAcceptedList.length === 0) {
          if (filteredTapList.length === 2) {
            console.log("Double");
            const filteredNotes = notes.filter(
              (item) =>
                item.id === Number(filteredTapList[1].touch[0].target.id) &&
                item.type === "startSlide"
            );
            const diffOne = diffPos(filteredTapList, filteredNotes, 1);
            console.log(diffOne);
            // const diffOne = Math.abs(
            //   filteredTapList[1].touch[0].pageX -
            //     filteredNotes[0]?.x +
            //     filteredTapList[1].touch[0].pageY -
            //     342.14
            // );
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: filteredTapList[1].touch,
                quality: qualityCheck(diffOne),
                type: filteredNotes[0]?.type || "",
                tapId: filteredTapList[1].touch[0].target.id,
              },
            ]);
          } else {
            console.log("Single");
            const filteredNotes = notes.filter(
              (item) =>
                item.id === Number(filteredTapList[0].touch[0].target.id) &&
                item.type === "startSlide"
            );
            // const diffZero = Math.abs(
            //   filteredTapList[0].touch[0].pageX -
            //     filteredNotes[0]?.x +
            //     filteredTapList[0].touch[0].pageY -
            //     342.14
            // );
            const diffZero = diffPos(filteredTapList, filteredNotes, 0);
            console.log(diffZero);
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: filteredTapList[0].touch,
                quality: qualityCheck(diffZero),
                type: filteredNotes[0]?.type || "",
                tapId: filteredTapList[0].touch[0].target.id,
              },
            ]);
          }
        } else return;
      } else return;
    }
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

    // const holdList = [{ touch: [...e.changedTouches], dur: dur }];
    const holdList = [...e.changedTouches].map((item) => {
      return { touch: item, dur: dur };
    });
    console.log(holdList);
    const filteredHoldListDur = notes.filter(
      (item) =>
        item.type === "holdSlide" &&
        Math.abs(item.time - holdList[0].dur + 1120) < 200
    );
    if (filteredHoldListDur.length === 0) return;
    console.log(filteredHoldListDur);
    if (acceptedList.length < notes.length) {
      if (holdList.length > 0) {
        const filteredNotes = notes.filter(
          (item) =>
            (item.endId === Number(holdList[0]?.touch.target.id) ||
              Number(holdList[1]?.touch?.target.id)) &&
            item.type === "holdSlide"
        );
        console.log(filteredNotes);
        if (filteredNotes.length === 0) {
          return;
        }
        const filteredAccepted = acceptedList.filter(
          (item) => item?.realId === Number(filteredNotes[0].id)
        );
        if (filteredAccepted.length > 0) {
          return;
        }
        console.log(filteredAccepted);
        const filteredHoldList = holdList.filter(
          (item) => item.touch?.target.className === "Bdot"
        );
        console.log(filteredHoldList);
        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type === "holdSlide"
            ? item?.endId === filteredHoldList[0]?.touch?.target ||
              filteredHoldList[1]?.touch?.target
            : false
        );
        console.log(filteredAcceptedList);

        if (filteredAcceptedList.length === 0) {
          if (filteredHoldList.length === 2) {
            console.log("DoubleHold");
            const filteredNotes = notes.filter(
              (item) =>
                (item.endId === Number(filteredHoldList[0].touch.target.id) ||
                  item.endId === Number(filteredHoldList[1].touch.target.id)) &&
                item.type === "holdSlide"
            );
            console.log(filteredNotes);
            const secondFilteredNote = filteredNotes.filter(
              (item) =>
                item.endId === Number(filteredHoldList[1].touch.target.id)
            );
            console.log(secondFilteredNote);
            const firstFilteredNote = filteredNotes.filter(
              (item) =>
                item.endId === Number(filteredHoldList[0].touch.target.id)
            );
            console.log(firstFilteredNote);
            // const diffOne = diffPos(holdList, secondFilteredNote, 1);
            const diffOne = Math.abs(
              holdList[1]?.touch.pageX -
                secondFilteredNote[0]?.x +
                holdList[1]?.touch.pageY -
                Y
            );
            // const diffZero = diffPos(holdList, firstFilteredNote, 0);
            const diffZero = Math.abs(
              holdList[0]?.touch.pageX -
                firstFilteredNote[0]?.x +
                holdList[0]?.touch.pageY -
                Y
            );
            // const diffDuration = Math.abs(
            //   holdList[1]?.dur - filteredNotes[0]?.time - 1120
            // );
            // console.log(diffDuration);
            // console.log(diffOne);
            // if (diffOne >= 30 || diffDuration > 300) return;
            if (diffOne >= quality.accepted && diffZero >= quality.accepted)
              return;
            console.log(diffZero);
            console.log(diffOne);
            if (diffZero < quality.accepted) {
              console.log("here-1");
              setAcceptedList((prevState) => {
                console.log([...prevState]);
                console.log(firstFilteredNote[0].id);
                const Duplicate = [...prevState]?.filter(
                  (item) =>
                    item?.realId === firstFilteredNote[0].id ||
                    item?.realId === secondFilteredNote[0].id
                  // item?.realId === filteredNotes[0].id ||
                  // item?.realId === filteredNotes[filteredNotes.length - 1]?.id
                );
                console.log(Duplicate);
                if (Duplicate.length === 0) {
                  console.log(dur);
                  return [
                    ...prevState,
                    {
                      touch: holdList[0]?.touch,
                      realId: filteredNotes[0].id,
                      endType: true,
                      quality: qualityCheck(diffZero),
                      type: filteredNotes[0]?.type || "",
                      durDouble: holdList[0]?.dur,
                    },
                  ];
                } else {
                  console.log("here-33");
                  return [...prevState];
                }
              });
              console.log("here-3");
            }

            if (diffOne < quality.accepted) {
              console.log("here-4");
              setAcceptedList((prevState) => {
                console.log([...prevState]);
                console.log(secondFilteredNote[0].id);
                const Duplicate = [...prevState]?.filter(
                  (item) =>
                    item?.realId === firstFilteredNote[0].id ||
                    item?.realId === secondFilteredNote[0].id
                  // item?.realId === filteredNotes[0].id ||
                  // item?.realId === filteredNotes[filteredNotes.length - 1]?.id
                );
                console.log(Duplicate);
                if (Duplicate.length === 0) {
                  console.log(dur);
                  return [
                    ...prevState,
                    {
                      touch: holdList[1]?.touch,
                      realId: filteredNotes[1].id,
                      endType: true,
                      quality: qualityCheck(diffOne),
                      type: filteredNotes[1]?.type || "",
                      durDouble: holdList[1]?.dur,
                    },
                  ];
                } else {
                  console.log("here-55");
                  return [...prevState];
                }
              });
            }
            console.log("here-6");

            setBeats((prevState) =>
              [...prevState].filter(
                (item) =>
                  item.endId === Number(holdList[1]?.touch.target.id) &&
                  item.type === "holdSlide"
              )
            );
          } else {
            console.log("SingleHold");
            console.log(holdList[0]?.dur);
            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredHoldList[0].touch.target.id) &&
                item.type === "holdSlide"
            );
            // const diffZero = diffPos(holdList, filteredNotes, 0);
            const diffZero = Math.abs(
              holdList[0]?.touch.pageX -
                filteredNotes[0]?.x +
                holdList[0]?.touch.pageY -
                Y
            );
            // const diffDuration = Math.abs(
            //   holdList[1]?.dur - filteredNotes[0]?.time - 1120
            // );
            // console.log(diffDuration);
            // console.log(diffOne);
            // if (diffOne >= 30 || diffDuration > 300) return;
            if (diffZero >= quality.accepted) return;
            console.log(diffZero);
            setAcceptedList((prevState) => {
              console.log([...prevState]);
              console.log(filteredNotes[0].id);
              const Duplicate = [...prevState]?.filter(
                (item) => item?.realId === filteredNotes[0].id
              );
              if (Duplicate.length === 0) {
                console.log(dur);
                return [
                  ...prevState,
                  {
                    touch: holdList[0]?.touch,
                    realId: filteredNotes[0].id,
                    endType: true,
                    quality: qualityCheck(diffZero),
                    type: filteredNotes[0]?.type || "",
                    durSingle: holdList[0]?.dur,
                  },
                ];
              } else {
                console.log("here-88");
                return [...prevState];
              }
            });

            setBeats((prevState) =>
              [...prevState].filter(
                (item) =>
                  item.endId === Number(holdList[0]?.touch.target.id) &&
                  item.type === "holdSlide"
              )
            );
          }
        } else return;
      }
    }
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

    const endList = [{ touch: [...e.changedTouches], dur: dur }];

    const filteredEndListListDur = notes.filter(
      (item) =>
        item.type === "endSlide" &&
        Math.abs(item.time + 1120 - endList[0].dur) < 200
    );
    if (filteredEndListListDur.length === 0) return;

    if (acceptedList.length < notes.length) {
      if (endList.length > 0) {
        const filteredNotes = notes.filter(
          (item) =>
            item.endId === Number(endList[0]?.touch[0].target.id) &&
            item.type === "endSlide"
        );
        if (filteredNotes.length === 0) {
          return;
        }

        const filteredEndList = endList.filter(
          (item) => item.touch[0].target.className === "Bdot"
        );

        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type === "endSlide"
            ? item?.endId === filteredEndList[0]?.touch[0]?.target ||
              filteredEndList[1]?.touch[0]?.target
            : false
        );

        if (filteredAcceptedList.length === 0) {
          if (filteredEndList.length === 2) {
            console.log("DoubleEnd");

            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredEndList[1].touch[0].target.id) &&
                item.type === "endSlide"
            );
            const diffOne = diffPos(endList, filteredNotes, 1);
            // const diffOne = Math.abs(
            //   endList[1]?.touch[0].pageX -
            //     filteredNotes[0]?.x +
            //     endList[1]?.touch[0].pageY -
            //     342.14
            // );
            const diffDuration = Math.abs(
              endList[1]?.dur - filteredNotes[0]?.time - 1120
            );

            if (diffOne >= quality.accepted || diffDuration > 300) return;
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: endList[1]?.touch[0],
                realId: filteredNotes[0].id,
                endType: true,
                quality: qualityCheck(diffOne),
                type: filteredNotes[0]?.type || "",
                dur: dur,
              },
            ]);

            setBeats((prevState) =>
              [...prevState].filter(
                (item) => item.endId === Number(endList[0]?.touch[1].target.id)
              )
            );
          } else {
            console.log("SingleEnd");
            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredEndList[0].touch[0].target.id) &&
                item.type === "endSlide"
            );
            console.log(filteredNotes);

            const diffZero = diffPos(endList, filteredNotes, 0);
            // const diffZero = Math.abs(
            //   endList[0]?.touch[0].pageX -
            //     filteredNotes[0]?.x +
            //     endList[0]?.touch[0].pageY -
            //     342.14
            // );
            const diffDuration = Math.abs(
              endList[0]?.dur - filteredNotes[0]?.time - 1120
            );

            if (diffZero >= quality.accepted || diffDuration > 300) return;

            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: endList[0]?.touch[0],
                realId: filteredNotes[0].id,
                endType: true,
                quality: qualityCheck(diffZero),
                type: filteredNotes[0]?.type || "",
                dur: dur,
              },
            ]);

            setBeats((prevState) =>
              [...prevState].filter(
                (item) => item.endId === Number(endList[0]?.touch[0].target.id)
              )
            );
          }
        }
      }
    }
  };

  const touchCancelHandler = (e) => {
    // console.log("cancel");
    // setTapList([]);
  };

  // useEffect(() => {
  //   console.log(list);
  //   console.log(tapList);
  //   console.log(endList);
  //   // console.log(moveList);
  //   console.log(holdList);
  //   console.log(acceptedList);

  //   if (
  //     acceptedList.length > 0 &&
  //     acceptedList[acceptedList.length - 1].quality !== "Miss" &&
  //     list.length > 0 &&
  //     list[0]?.target?.className === "Bdot"
  //   ) {
  //     setHoldingEffect(true);
  //   } else {
  //     holdingEffect && setHoldingEffect(false);
  //   }

  // }, [
  //   tapList,
  //   acceptedList.length,
  //   start,
  //   acceptedList,
  //   endList,
  //   // moveList,
  //   holdList,
  //   holdingEffect,
  //   list,
  // ]);

  const missHandler = (id) => {
    if (acceptedList.length < notes.length) {
      console.log(id.target.id);
      console.log(acceptedList);
      const filteredAcceptedList = acceptedList.filter((item) =>
        item?.endType
          ? item?.realId === Number(id.target.id)
          : item?.touch[0]?.target.id === id.target.id
      );
      console.log(filteredAcceptedList);
      if (filteredAcceptedList.length > 0) {
        return;
      } else {
        setAcceptedList((prevState) => [
          ...prevState,
          {
            touch: [{ target: id.target }],
            missId: id.target.id,
            quality: "Miss",
          },
        ]);
      }
    }
  };

  // const clickHandler = (id) => {
  //   console.log(id);
  //   setBeats((prevState) => [...prevState].filter((item) => item.id !== id));
  // };

  return (
    <>
      <div
        className="bigContainer"
        onTouchStart={touchStartHandler}
        onTouchEnd={touchEndHandler}
        onTouchCancel={touchCancelHandler}
        onTouchMove={touchMoveHandler}
      >
        <div className="touchContainer">
          <div id="divsList">
            {notesToPers.map((item, i) => {
              return (
                <div
                  key={item.id}
                  style={{ left: `${item.x}px`, top: `332px` }}
                  // className={holdingEffect ? "dot holdEffect" : "dot"}
                  className={"Cdot"}
                ></div>
              );
            })}{" "}
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
            notesDisp.map((item, i) => {
              if (item.h) {
                return (
                  <svg
                    className="lineA"
                    id={item.id}
                    key={item.id}
                    style={{
                      "--1-slide-top": `calc((1400px + ${item.dTime}px)*3/7 - 148px)`,
                      width: "1000",
                      height: "5000",
                      animationDelay: `${item.time}ms`,
                      top: `-148px`,
                      animationDuration: `calc(var(--base-duration) + ${item.dTime}ms)`,
                    }}
                  >
                    <line
                      className="lineStroke"
                      x1={item.x2}
                      y1={2500 - (item.dTime * 3) / 7}
                      x2={item.x1}
                      y2="2500"
                    ></line>
                  </svg>
                );
              } else {
                return (
                  <div
                    onClick={(e, id) => {
                      console.log(item.id);
                      console.log(e);
                      e.preventDefault();
                      // clickHandler(item.id);
                    }}
                    onAnimationEnd={(id) => {
                      missHandler(id);
                    }}
                    key={item.id}
                    id={item.id}
                    className="Bdot"
                    style={{
                      left: `${item.x}px`,
                      animationDelay: `${item.time}ms`,
                    }}
                  ></div>
                );
              }
            })}
          <div className="playArea"></div>
        </div>

        <div className="quality">
          <div>{acceptedList[acceptedList?.length - 1]?.quality}</div>
          <div>{streak}</div>
        </div>

        {/* <div className="newPlayArea"></div> */}
      </div>
      {acceptedList.length === notes.length && (
        <div className="summary">
          <div>Summary</div>
          <div>
            SuperPerfect:{" "}
            {acceptedList.reduce((acc, obj) => {
              console.log(acc);
              console.log(obj);
              if (obj.quality === "SuperPerfect") {
                return acc + 1;
              } else return acc;
            }, 0)}
          </div>
          <div>
            Perfect:{" "}
            {acceptedList.reduce((acc, obj) => {
              console.log(acc);
              console.log(obj);
              if (obj.quality === "Perfect") {
                return acc + 1;
              } else return acc;
            }, 0)}
          </div>
          <div>
            Good:{" "}
            {acceptedList.reduce((acc, obj) => {
              console.log(acc);
              console.log(obj);
              if (obj.quality === "Good") {
                return acc + 1;
              } else return acc;
            }, 0)}
          </div>
          <div>
            Miss:{" "}
            {acceptedList.reduce((acc, obj) => {
              console.log(acc);
              console.log(obj);
              if (obj.quality === "Miss") {
                return acc + 1;
              } else return acc;
            }, 0)}
          </div>
          <div>Total: {acceptedList.length}</div>
        </div>
      )}
      <div className="xline"></div>
      <div className="yline1"></div>
      <div className="yline2"></div>
    </>
  );
};

export default Rhythm;
