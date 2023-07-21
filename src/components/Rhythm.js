import { useEffect, useState } from "react";
import "./Rhythm.css";

// const r = document.querySelector(":root");
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
];

const notes = [
  { x: 620, time: 0, id: 1, type: "startSlide" },
  { x: 420, time: 1000, id: 3, endId: 1, type: "holdSlide" },
  { x: 620, time: 2000, id: 5, endId: 1, type: "endSlide" },
  { x: 100, time: 0, id: 6, type: "startSlide" },
  { x: 200, time: 1000, id: 8, endId: 6, type: "holdSlide" },
  { x: 100, time: 2000, id: 10, endId: 6, type: "endSlide" },
];

const Rhythm = ({ start }) => {
  const [list, setList] = useState([]);
  const [acceptedList, setAcceptedList] = useState([]);
  const [beats, setBeats] = useState(notesDisp);
  // const [tapList, setTapList] = useState([]);
  // const [endList, setEndList] = useState([]);
  // // const [moveList, setMoveList] = useState([]);
  // const [holdList, setHoldList] = useState([]);
  // const [holdingEffect, setHoldingEffect] = useState(false);

  // console.log("Top");

  // console.log(beats);
  // console.log(list);

  // console.log(acceptedList);

  const touchStartHandler = (e) => {
    const dur = new Date().getTime() - start;
    console.log("start");
    setList((prevState) => [...prevState, ...e.changedTouches]);
    const tapList = [{ touch: [...e.changedTouches], dur: dur }];

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
            // console.log("Double");
            const filteredNotes = notes.filter(
              (item) =>
                item.id === Number(filteredTapList[1].touch[0].target.id) &&
                item.type === "startSlide"
            );
            const diffOne = Math.abs(
              filteredTapList[1].touch[0].pageX -
                filteredNotes[0]?.x +
                filteredTapList[1].touch[0].pageY -
                332
            );
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: filteredTapList[1].touch,
                quality:
                  diffOne < 30 ? (diffOne < 15 ? "Perfect" : "Good") : "Miss",
                type: filteredNotes[0]?.type || "",
                tapId: filteredTapList[1].touch[0].target.id,
              },
            ]);
          } else {
            // console.log("Single");
            const filteredNotes = notes.filter(
              (item) =>
                item.id === Number(filteredTapList[0].touch[0].target.id) &&
                item.type === "startSlide"
            );
            const diffZero = Math.abs(
              filteredTapList[0].touch[0].pageX -
                filteredNotes[0]?.x +
                filteredTapList[0].touch[0].pageY -
                332
            );
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: filteredTapList[0].touch,
                quality:
                  diffZero < 30 ? (diffZero < 15 ? "Perfect" : "Good") : "Miss",
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

    const holdList = [{ touch: [...e.changedTouches], dur: dur }];

    if (acceptedList.length < notes.length) {
      if (holdList.length > 0) {
        const filteredNotes = notes.filter(
          (item) =>
            (item.endId === Number(holdList[0]?.touch[0].target.id) ||
              Number(holdList[0]?.touch[1]?.target.id)) &&
            item.type === "holdSlide"
        );
        if (filteredNotes.length === 0) {
          return;
        }
        const filteredAccepted = acceptedList.filter(
          (item) => item?.realId === Number(filteredNotes[0].id)
        );
        if (filteredAccepted.length > 0) {
          return;
        }
        const filteredHoldList = holdList.filter(
          (item) =>
            item.touch[0].target.className ||
            item?.touch[1]?.target?.className === "Bdot"
        );

        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type === "holdSlide"
            ? item?.endId === filteredHoldList[0]?.touch[0]?.target ||
              filteredHoldList[0]?.touch[1]?.target
            : false
        );

        if (filteredAcceptedList.length === 0) {
          if (filteredHoldList[0].touch.length === 2) {
            // console.log("DoubleHold");
            const filteredNotes = notes.filter(
              (item) =>
                (item.endId ===
                  Number(filteredHoldList[0].touch[0].target.id) ||
                  item.endId ===
                    Number(filteredHoldList[0].touch[1].target.id)) &&
                item.type === "holdSlide"
            );
            const secondFilteredNote = filteredNotes.filter(
              (item) => item.id === filteredHoldList[0].touch[0].target.id
            );
            const firstFilteredNote = filteredNotes.filter(
              (item) => item.id === filteredHoldList[0].touch[0].target.id
            );
            const diffOne = Math.abs(
              holdList[0]?.touch[1].pageX -
                secondFilteredNote[0]?.x +
                holdList[0]?.touch[1].pageY -
                332
            );
            const diffZero = Math.abs(
              holdList[0]?.touch[0].pageX -
                firstFilteredNote[0]?.x +
                holdList[0]?.touch[0].pageY -
                332
            );
            // const diffDuration = Math.abs(
            //   holdList[1]?.dur - filteredNotes[0]?.time - 1120
            // );
            // console.log(diffDuration);
            // console.log(diffOne);
            // if (diffOne >= 30 || diffDuration > 300) return;
            if (diffOne >= 30 && diffZero >= 30) return;
            if (diffZero < 30) {
              setAcceptedList((prevState) => {
                const Duplicate = [...prevState]?.filter(
                  (item) =>
                    item?.realId === filteredNotes[0].id ||
                    filteredNotes[filteredNotes.length - 1]?.id
                );
                if (Duplicate.length === 0) {
                  return [
                    ...prevState,
                    {
                      touch: holdList[0]?.touch[0],
                      realId: filteredNotes[0].id,
                      endType: true,
                      quality:
                        diffZero < 30
                          ? diffZero < 15
                            ? "Perfect"
                            : "Good"
                          : "Miss",
                      type: filteredNotes[0]?.type || "",
                    },
                  ];
                } else return [...prevState];
              });
            }

            if (diffOne < 30) {
              setAcceptedList((prevState) => {
                const Duplicate = [...prevState]?.filter(
                  (item) =>
                    item?.realId === filteredNotes[0].id ||
                    filteredNotes[filteredNotes.length - 1]?.id
                );
                if (Duplicate.length === 0) {
                  return [
                    ...prevState,
                    {
                      touch: holdList[0]?.touch[1],
                      realId: filteredNotes[1].id,
                      endType: true,
                      quality:
                        diffOne < 30
                          ? diffOne < 15
                            ? "Perfect"
                            : "Good"
                          : "Miss",
                      type: filteredNotes[1]?.type || "",
                    },
                  ];
                } else return [...prevState];
              });
            }

            setBeats((prevState) =>
              [...prevState].filter(
                (item) =>
                  item.endId === Number(holdList[0]?.touch[1].target.id) &&
                  item.type === "holdSlide"
              )
            );
          } else {
            // console.log("SingleHold");
            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredHoldList[0].touch[0].target.id) &&
                item.type === "holdSlide"
            );
            const diffZero = Math.abs(
              holdList[0]?.touch[0].pageX -
                filteredNotes[0]?.x +
                holdList[0]?.touch[0].pageY -
                332
            );
            // const diffDuration = Math.abs(
            //   holdList[1]?.dur - filteredNotes[0]?.time - 1120
            // );
            // console.log(diffDuration);
            // console.log(diffOne);
            // if (diffOne >= 30 || diffDuration > 300) return;
            if (diffZero >= 30) return;

            setAcceptedList((prevState) => {
              const Duplicate = [...prevState]?.filter(
                (item) => item?.realId === filteredNotes[0].id
              );
              if (Duplicate.length === 0) {
                return [
                  ...prevState,
                  {
                    touch: holdList[0]?.touch[0],
                    realId: filteredNotes[0].id,
                    endType: true,
                    quality:
                      diffZero < 30
                        ? diffZero < 15
                          ? "Perfect"
                          : "Good"
                        : "Miss",
                    type: filteredNotes[0]?.type || "",
                  },
                ];
              } else return [...prevState];
            });

            setBeats((prevState) =>
              [...prevState].filter(
                (item) =>
                  item.endId === Number(holdList[0]?.touch[0].target.id) &&
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
            // console.log("DoubleEnd");

            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredEndList[1].touch[0].target.id) &&
                item.type === "endSlide"
            );
            const diffOne = Math.abs(
              endList[1]?.touch[0].pageX -
                filteredNotes[0]?.x +
                endList[1]?.touch[0].pageY -
                332
            );
            const diffDuration = Math.abs(
              endList[1]?.dur - filteredNotes[0]?.time - 1120
            );

            if (diffOne >= 30 || diffDuration > 300) return;
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: endList[1]?.touch[0],
                realId: filteredNotes[0].id,
                endType: true,
                quality:
                  diffOne < 30 ? (diffOne < 15 ? "Perfect" : "Good") : "Miss",
                type: filteredNotes[0]?.type || "",
              },
            ]);
            setBeats((prevState) =>
              [...prevState].filter(
                (item) => item.endId === Number(endList[0]?.touch[1].target.id)
              )
            );
          } else {
            // console.log("SingleEnd");
            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredEndList[0].touch[0].target.id) &&
                item.type === "endSlide"
            );
            console.log(filteredNotes);
            const diffZero = Math.abs(
              endList[0]?.touch[0].pageX -
                filteredNotes[0]?.x +
                endList[0]?.touch[0].pageY -
                332
            );
            const diffDuration = Math.abs(
              endList[0]?.dur - filteredNotes[0]?.time - 1120
            );

            if (diffZero >= 50 || diffDuration > 300) return;

            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: endList[0]?.touch[0],
                realId: filteredNotes[0].id,
                endType: true,
                quality:
                  diffZero < 50 ? (diffZero < 30 ? "Perfect" : "Good") : "Miss",
                type: filteredNotes[0]?.type || "",
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
          {acceptedList[acceptedList?.length - 1]?.quality}
        </div>

        {/* <div className="newPlayArea"></div> */}
      </div>
      <div className="xline"></div>
      <div className="yline1"></div>
      <div className="yline2"></div>
    </>
  );
};

export default Rhythm;
