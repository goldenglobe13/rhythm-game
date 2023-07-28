import { useEffect, useState } from "react";
import "./Rhythm.css";

// const r = document.querySelector(":root");
// let Y = 339.86;
let Y = 335.04;
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
  return q;
}
var my_notesDispNew = JSON.parse(
  `[{"x":"584.8331299","time":"0","id":1,"endId":"0","type":"startSlide","newType":"tap"},{"x":"183.9092712","time":"464","id":2,"endId":"0","type":"startSlide","newType":"tap"},{"x":"591.3758545","time":"930","id":3,"endId":"0","type":"startSlide","newType":"startSlide"},{"h":true,"x1":"591.3758545","x2":"592.4663086","time":"930","id":4,"dTime":771},{"x":"592.4663086","time":"1701","id":5,"endId":"0","type":"endSlide","newType":"endSlide"},{"x":"183.182312","time":"2137","id":6,"endId":"0","type":"startSlide","newType":"startSlide"},{"h":true,"x1":"183.182312","x2":"183.182312","time":"2137","id":7,"dTime":761},{"x":"183.182312","time":"2898","id":8,"endId":"0","type":"endSlide","newType":"endSlide"},{"x":"592.4663086","time":"3298","id":9,"endId":"0","type":"startSlide","newType":"startSlide"},{"h":true,"x1":"592.4663086","x2":"430.3520508","time":"3298","id":10,"dTime":585},{"x":"430.3520508","time":"3883","id":11,"endId":"0","type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":"430.3520508","x2":"605.9153442","time":"3883","id":12,"dTime":423},{"x":"605.9153442","time":"4306","id":13,"endId":"0","type":"endSlide","newType":"endSlide"},{"x":"183.182312","time":"4727","id":14,"endId":"0","type":"startSlide","newType":"startSlide"},{"h":true,"x1":"183.182312","x2":"368.9230957","time":"4727","id":15,"dTime":484},{"x":"368.9230957","time":"5211","id":16,"endId":"0","type":"holdSlide","newType":"holdSlide"},{"h":true,"x1":"368.9230957","x2":"180.6379395","time":"5211","id":17,"dTime":466},{"x":"180.6379395","time":"5677","id":18,"endId":"0","type":"endSlide","newType":"endSlide"}]`
);
var my_notes = JSON.parse(
  `[{"x":559.8302612304688,"time":"0","id":1,"endId":"0","type":"startSlide","newType":"tap"},{"x":229.90261840820312,"time":"464","id":2,"endId":"0","type":"startSlide","newType":"tap"},{"x":565.068229675293,"time":"930","id":3,"endId":"0","type":"startSlide","newType":"startSlide"},{"x":565.9378662109375,"time":"1701","id":5,"endId":"0","type":"endSlide","newType":"endSlide"},{"x":229.3228530883789,"time":"2137","id":6,"endId":"0","type":"startSlide","newType":"startSlide"},{"x":229.3228530883789,"time":"2898","id":8,"endId":"0","type":"endSlide","newType":"endSlide"},{"x":565.9378662109375,"time":"3298","id":9,"endId":"0","type":"startSlide","newType":"startSlide"},{"x":431.2665786743164,"time":"3883","id":11,"endId":"0","type":"holdSlide","newType":"holdSlide"},{"x":576.6936569213867,"time":"4306","id":13,"endId":"0","type":"endSlide","newType":"endSlide"},{"x":229.3228530883789,"time":"4727","id":14,"endId":"0","type":"startSlide","newType":"startSlide"},{"x":378.55968475341797,"time":"5211","id":16,"endId":"0","type":"holdSlide","newType":"holdSlide"},{"x":227.29364013671875,"time":"5677","id":18,"endId":"0","type":"endSlide","newType":"endSlide"}]`
);

const notesDisp = my_notesDispNew;
const notes = my_notes;

const Rhythm = ({ start }) => {
  const [list, setList] = useState([]);
  const [acceptedList, setAcceptedList] = useState([]);
  // const [beats, setBeats] = useState(notesDisp);
  const [streak, setStreak] = useState("");

  // console.log("Top");
  // console.log(beats);
  // console.log(list);

  console.log(acceptedList);
  console.log(notes);
  console.log(notesDisp);

  const screenH = window.screen.height;
  console.log(screenH);

  useEffect(() => {
    if (acceptedList.length === 0) return;
    if (acceptedList[acceptedList.length - 1]?.quality === "Miss") {
      setStreak("");
    } else {
      setStreak((prevState) => Number(prevState) + 1);
    }
  }, [acceptedList]);

  const touchStartHandler = (e) => {
    const dur = new Date().getTime() - start;
    console.log("start");
    console.log(e);

    setList((prevState) => [...prevState, ...e.changedTouches]);
    const tapList = [{ touch: [...e.changedTouches], dur: dur }];
    console.log(tapList);

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
        console.log(filteredNotes);
        const filteredTapList = tapList.filter(
          (item) =>
            item.touch[0].target.className === "Bdot BdotB" ||
            item.touch[0].target.className === "Bdot BdotY"
        );
        console.log(filteredTapList);
        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type === "startSlide"
            ? item?.touch[0]?.target.id ===
                filteredTapList[0]?.touch[0]?.target ||
              filteredTapList[1]?.touch[0]?.target
            : false
        );
        console.log(filteredAcceptedList);
        if (filteredAcceptedList.length === 0) {
          if (filteredTapList.length === 2) {
            console.log("Double");
            const filteredNotes = notes.filter(
              (item) =>
                item.id === Number(filteredTapList[1].touch[0].target.id) &&
                item.type === "startSlide"
            );
            const diffOne = diffPos(filteredTapList, filteredNotes, 1);
            // console.log(diffOne);
            // const diffOne = Math.abs(
            //   filteredTapList[1].touch[0].pageX -
            //     filteredNotes[0]?.x +
            //     filteredTapList[1].touch[0].pageY -
            //     342.14
            // );
            console.log(filteredNotes);
            console.log(diffOne);
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
            console.log(filteredNotes);
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
    // console.log(holdList);

    const filteredHoldListDur = notes.filter(
      (item) =>
        item.type === "holdSlide" &&
        Math.abs(item.time - holdList[0].dur + 1392) < 200
    );
    if (filteredHoldListDur.length === 0) return;
    // console.log(filteredHoldListDur);
    if (acceptedList.length < notes.length) {
      if (holdList.length > 0) {
        const filteredNotes = notes.filter(
          (item) =>
            (item.endId === Number(holdList[0]?.touch.target.id) ||
              Number(holdList[1]?.touch?.target.id)) &&
            item.type === "holdSlide"
        );
        // console.log(filteredNotes);
        if (filteredNotes.length === 0) {
          return;
        }
        const filteredAccepted = acceptedList.filter(
          (item) => item?.realId === Number(filteredNotes[0].id)
        );
        if (filteredAccepted.length > 0) {
          return;
        }
        // console.log(filteredAccepted);
        const filteredHoldList = holdList.filter(
          (item) =>
            item.touch?.target.className === "Bdot BdotB" ||
            item.touch?.target.className === "Bdot BdotY"
        );
        // console.log(filteredHoldList);
        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type === "holdSlide"
            ? item?.endId === filteredHoldList[0]?.touch?.target ||
              filteredHoldList[1]?.touch?.target
            : false
        );
        // console.log(filteredAcceptedList);

        if (filteredAcceptedList.length === 0) {
          if (filteredHoldList.length === 2) {
            console.log("DoubleHold");
            const filteredNotes = notes.filter(
              (item) =>
                (item.endId === Number(filteredHoldList[0].touch.target.id) ||
                  item.endId === Number(filteredHoldList[1].touch.target.id)) &&
                item.type === "holdSlide"
            );
            // console.log(filteredNotes);
            const secondFilteredNote = filteredNotes.filter(
              (item) =>
                item.endId === Number(filteredHoldList[1].touch.target.id)
            );
            // console.log(secondFilteredNote);
            const firstFilteredNote = filteredNotes.filter(
              (item) =>
                item.endId === Number(filteredHoldList[0].touch.target.id)
            );
            // console.log(firstFilteredNote);
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
            // console.log(diffZero);
            // console.log(diffOne);
            if (diffZero < quality.accepted) {
              setAcceptedList((prevState) => {
                // console.log([...prevState]);
                // console.log(firstFilteredNote[0].id);
                const Duplicate = [...prevState]?.filter(
                  (item) =>
                    item?.realId === firstFilteredNote[0].id ||
                    item?.realId === secondFilteredNote[0].id
                  // item?.realId === filteredNotes[0].id ||
                  // item?.realId === filteredNotes[filteredNotes.length - 1]?.id
                );
                // console.log(Duplicate);
                if (Duplicate.length === 0) {
                  // console.log(dur);
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
                  return [...prevState];
                }
              });
            }

            if (diffOne < quality.accepted) {
              setAcceptedList((prevState) => {
                // console.log([...prevState]);
                // console.log(secondFilteredNote[0].id);
                const Duplicate = [...prevState]?.filter(
                  (item) =>
                    item?.realId === firstFilteredNote[0].id ||
                    item?.realId === secondFilteredNote[0].id
                  // item?.realId === filteredNotes[0].id ||
                  // item?.realId === filteredNotes[filteredNotes.length - 1]?.id
                );
                // console.log(Duplicate);
                if (Duplicate.length === 0) {
                  // console.log(dur);
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
                  return [...prevState];
                }
              });
            }

            // setBeats((prevState) =>
            //   [...prevState].filter(
            //     (item) =>
            //       item.endId === Number(holdList[1]?.touch.target.id) &&
            //       item.type === "holdSlide"
            //   )
            // );
          } else {
            console.log("SingleHold");
            // console.log(holdList[0]?.dur);
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
            // console.log(diffZero);
            setAcceptedList((prevState) => {
              // console.log([...prevState]);
              // console.log(filteredNotes[0].id);
              const Duplicate = [...prevState]?.filter(
                (item) => item?.realId === filteredNotes[0].id
              );
              if (Duplicate.length === 0) {
                // console.log(dur);
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
                return [...prevState];
              }
            });

            // setBeats((prevState) =>
            //   [...prevState].filter(
            //     (item) =>
            //       item.endId === Number(holdList[0]?.touch.target.id) &&
            //       item.type === "holdSlide"
            //   )
            // );
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
    console.log(endList);
    const filteredEndListListDur = notes.filter(
      (item) =>
        item.type === "endSlide" &&
        Math.abs(item.time + 1392 - endList[0].dur) < 200
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
          (item) =>
            item.touch[0].target.className === "Bdot BdotB" ||
            item.touch[0].target.className === "Bdot BdotY"
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
              endList[1]?.dur - filteredNotes[0]?.time - 1392
            );

            if (diffOne >= quality.accepted || diffDuration > 200) return;
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

            // setBeats((prevState) =>
            //   [...prevState].filter(
            //     (item) => item.endId === Number(endList[0]?.touch[1].target.id)
            //   )
            // );
          } else {
            console.log("SingleEnd");
            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredEndList[0].touch[0].target.id) &&
                item.type === "endSlide"
            );
            // console.log(filteredNotes);

            const diffZero = diffPos(endList, filteredNotes, 0);
            // const diffZero = Math.abs(
            //   endList[0]?.touch[0].pageX -
            //     filteredNotes[0]?.x +
            //     endList[0]?.touch[0].pageY -
            //     342.14
            // );
            const diffDuration = Math.abs(
              endList[0]?.dur - filteredNotes[0]?.time - 1392
            );

            if (diffZero >= quality.accepted || diffDuration > 200) return;

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

            // setBeats((prevState) =>
            //   [...prevState].filter(
            //     (item) => item.endId === Number(endList[0]?.touch[0].target.id)
            //   )
            // );
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
      <div className="bigContainer">
        <div className="touchContainer">
          <div
            className="playArea"
            onTouchStart={touchStartHandler}
            onTouchEnd={touchEndHandler}
            onTouchCancel={touchCancelHandler}
            onTouchMove={touchMoveHandler}
          ></div>
          {/* <div
            style={{ left: `${130}px`, top: `160px` }}
            className={"Ddot"}
          ></div> */}
          <div id="divsList">
            {/* {notesToPers.map((item, i) => {
              return (
                <div
                  key={item.id}
                  style={{ left: `${item.x}px`, top: `88.55%` }}
                  // style={{ left: `${item.x}px`, top: `696px` }}
                  // className={holdingEffect ? "dot holdEffect" : "dot"}
                  className={"Cdot"}
                ></div>
              );
            })} */}
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
                    onTouchCancel={touchCancelHandler}
                    onTouchMove={touchMoveHandler}
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
      <div className="quality">
        <div>{acceptedList[acceptedList?.length - 1]?.quality}</div>
        <div>{streak}</div>
      </div>
      {acceptedList.length === notes.length && (
        <div className="summary">
          <div>Summary</div>
          <div>
            SuperPerfect:{" "}
            {acceptedList.reduce((acc, obj) => {
              if (obj.quality === "SuperPerfect") {
                return acc + 1;
              } else return acc;
            }, 0)}
          </div>
          <div>
            Perfect:{" "}
            {acceptedList.reduce((acc, obj) => {
              if (obj.quality === "Perfect") {
                return acc + 1;
              } else return acc;
            }, 0)}
          </div>
          <div>
            Good:{" "}
            {acceptedList.reduce((acc, obj) => {
              if (obj.quality === "Good") {
                return acc + 1;
              } else return acc;
            }, 0)}
          </div>
          <div>
            Miss:{" "}
            {acceptedList.reduce((acc, obj) => {
              if (obj.quality === "Miss") {
                return acc + 1;
              } else return acc;
            }, 0)}
          </div>
          <div>Total: {acceptedList.length}</div>
        </div>
      )}
      {/* <div className="curtain"></div> */}
      <div className="xline"></div>
      <div className="yline1"></div>
      <div className="yline2"></div>
    </>
  );
};

export default Rhythm;
