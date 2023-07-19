import { useEffect, useState } from "react";
import "./Rhythm.css";

// const r = document.querySelector(":root");
const notesDisp = [
  { x: 280, time: 0, id: 1, type: "startSlide" },
  {
    h: true,
    x1: 280,
    x2: 280,
    time: 0,
    id: 2,
    dTime: 1000,
  },
  { x: 280, time: 1000, id: 3, endId: 1, type: "holdSlide" },
  {
    h: true,
    x1: 280,
    x2: 280,
    time: 1000,
    id: 4,
    dTime: 1000,
  },
  { x: 280, time: 2000, id: 5, endId: 1, type: "endSlide" },
  { x: 100, time: 0, id: 6, type: "startSlide" },
  {
    h: true,
    x1: 100,
    x2: 100,
    time: 0,
    id: 7,
    dTime: 1000,
  },
  { x: 100, time: 1000, id: 8, endId: 6, type: "holdSlide" },
  {
    h: true,
    x1: 100,
    x2: 100,
    time: 1000,
    id: 9,
    dTime: 1000,
  },
  { x: 100, time: 2000, id: 10, endId: 6, type: "endSlide" },
];

const notes = [
  { x: 280, time: 0, id: 1, type: "startSlide" },
  { x: 280, time: 1000, id: 3, endId: 1, type: "holdSlide" },
  { x: 280, time: 2000, id: 5, endId: 1, type: "endSlide" },
  { x: 100, time: 0, id: 6, type: "startSlide" },
  { x: 100, time: 1000, id: 8, endId: 6, type: "holdSlide" },
  { x: 100, time: 2000, id: 10, endId: 6, type: "endSlide" },
];

const Rhythm = ({ start }) => {
  const [list, setList] = useState([]);
  const [listPer, setListPer] = useState([]);
  const [acceptedList, setAcceptedList] = useState([]);
  const [beats, setBeats] = useState(notes);
  const [endList, setEndList] = useState([]);
  const [moveList, setMoveList] = useState([]);
  const [holdList, setHoldList] = useState([]);

  console.log("Top");

  console.log(list);
  console.log(listPer);
  console.log(endList);
  console.log(beats);
  console.log(moveList);
  console.log(holdList);
  console.log(acceptedList);

  const touchStartHandler = (e) => {
    console.log(e);
    const dur = new Date().getTime() - start;
    console.log("start");
    setList((prevState) => [...prevState, ...e.changedTouches]);
    setListPer((prevState) => [
      ...prevState,
      { touch: [...e.changedTouches], dur: dur },
    ]);
    setHoldList((prevState) => [
      ...prevState,
      { touch: [...e.changedTouches], dur: dur },
    ]);
  };

  const touchMoveHandler = (e) => {
    console.log("Move");
    console.log(e);
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
    // setMoveList([{ touch: [...e.changedTouches] }]);
    setMoveList((prevState) =>
      [...prevState].map((item, i) => {
        const k = [...e.changedTouches].filter(
          (touch) => item.identifier === touch.identifier
        );
        return ch.includes(item.identifier) ? k[0] : item;
      })
    );
    setHoldList((prevState) =>
      [...prevState].map((item, i) => {
        const k = [...e.changedTouches].filter(
          (touch) => item.identifier === touch.identifier
        );
        return ch.includes(item.identifier) ? k[0] : item;
      })
    );
  };

  const touchEndHandler = (e) => {
    console.log(e);
    console.log("end");
    const ch = [...e.changedTouches].map((item) => item.identifier);
    if (ch.length === 0) return;
    setList((prevState) => {
      return [...prevState].filter(
        (item) => item.identifier !== e.changedTouches[0].identifier
      );
    });
    setEndList((prevState) => [...prevState, { touch: [...e.changedTouches] }]);
    setHoldList((prevState) => {
      return [...prevState].filter(
        (item) => item?.touch[0]?.identifier !== e.changedTouches[0].identifier
      );
    });
  };

  const touchCancelHandler = (e) => {
    console.log("cancel");
    setList([]);
  };

  useEffect(() => {
    if (acceptedList.length < notes.length + 1) {
      if (moveList.length > 0) {
        const filteredNotes = notes.filter(
          (item) => item.endId === Number(moveList[0]?.touch[0].target.id)
        );
        if (filteredNotes.length === 0) {
          setMoveList([]);
          return;
        }
        const filteredAccepted = acceptedList.filter(
          (item) => item?.realId === Number(filteredNotes[0].id)
        );
        if (filteredAccepted.length > 0) {
          setMoveList([]);
          return;
        }
        console.log(filteredNotes);

        const filteredMoveList = moveList.filter(
          (item) =>
            item.touch[0].target !== document.querySelector(".playArea") &&
            document.querySelector(".touchContainer")
        );
        console.log(filteredMoveList);

        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type !== "startSlide"
            ? item?.touch[0]?.target ===
                filteredMoveList[0]?.touch[0]?.target ||
              filteredMoveList[1]?.touch[0]?.target
            : false
        );

        console.log(filteredAcceptedList);

        if (filteredAcceptedList.length === 0) {
          if (filteredMoveList.length === 2) {
            console.log("Doublemove");
            console.log(filteredMoveList);
            console.log(notes);
            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredMoveList[1].touch[0].target.id) &&
                item.type === "moveSlide"
            );
            const diffOne = Math.abs(
              moveList[1]?.touch[0].pageX -
                filteredNotes[0]?.x +
                moveList[1]?.touch[0].pageY -
                322
            );
            if (diffOne >= 30) return;

            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: moveList[1]?.touch[0],
                realId: filteredNotes[0].id,
                endType: true,
                quality:
                  diffOne < 30 ? (diffOne < 15 ? "Perfect" : "Good") : "Miss",
              },
            ]);
            setMoveList([]);
            setBeats((prevState) =>
              [...prevState].filter(
                (item) => item.endId === Number(moveList[1]?.touch[0].target.id)
              )
            );
          } else {
            console.log("Singlemove");
            console.log(filteredMoveList);
            console.log(notes);
            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredMoveList[0].touch[0].target.id) &&
                item.type === "moveSlide"
            );
            const diffZero = Math.abs(
              moveList[0]?.touch[0].pageX -
                filteredNotes[0]?.x +
                moveList[0]?.touch[0].pageY -
                322
            );
            if (diffZero >= 30) return;

            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: moveList[0]?.touch[0],
                realId: filteredNotes[0].id,
                endType: true,
                quality:
                  diffZero < 30 ? (diffZero < 15 ? "Perfect" : "Good") : "Miss",
              },
            ]);
            setMoveList([]);
            setBeats((prevState) =>
              [...prevState].filter(
                (item) => item.endId === Number(moveList[0]?.touch[0].target.id)
              )
            );
          }
        } else return;
      }

      if (endList.length > 0) {
        const filteredNotes = notes.filter(
          (item) => item.endId === Number(endList[0]?.touch[0].target.id)
        );
        if (filteredNotes.length === 0) {
          setEndList([]);
          return;
        }
        console.log(filteredNotes);

        const filteredEndList = endList.filter(
          (item) =>
            item.touch[0].target !== document.querySelector(".playArea") &&
            document.querySelector(".touchContainer")
        );
        console.log(filteredEndList);

        const filteredAcceptedList = acceptedList.filter((item) =>
          item?.type !== "startSlide"
            ? item?.touch[0]?.target ||
              item?.endId === filteredEndList[0]?.touch[0]?.target ||
              filteredEndList[1]?.touch[0]?.target
            : false
        );

        console.log(filteredAcceptedList);
        if (filteredAcceptedList.length === 0) {
          if (filteredEndList.length === 2) {
            console.log("DoubleEnd");
            console.log(filteredEndList);
            console.log(notes);
            const filteredNotes = notes.filter(
              (item) =>
                item.endId === Number(filteredEndList[1].touch[0].target.id) &&
                item.type === "endSlide"
            );
            const diffOne = Math.abs(
              endList[1]?.touch[0].pageX -
                filteredNotes[0]?.x +
                endList[1]?.touch[0].pageY -
                322
            );
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: endList[1]?.touch[0],
                realId: filteredNotes[0].id,
                endType: true,
                quality:
                  diffOne < 30 ? (diffOne < 15 ? "Perfect" : "Good") : "Miss",
              },
            ]);
            setEndList([]);
            setBeats((prevState) =>
              [...prevState].filter(
                (item) => item.endId === Number(endList[1]?.touch[0].target.id)
              )
            );
          } else {
            console.log("SingleEnd");
            console.log(filteredEndList);
            console.log(notes);
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
                322
            );
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: endList[0]?.touch[0],
                realId: filteredNotes[0].id,
                endType: true,
                quality:
                  diffZero < 30 ? (diffZero < 15 ? "Perfect" : "Good") : "Miss",
              },
            ]);
            setEndList([]);
            setBeats((prevState) =>
              [...prevState].filter(
                (item) => item.endId === Number(endList[0]?.touch[0].target.id)
              )
            );
          }
        }
      }

      if (listPer.length > 0) {
        console.log(listPer);
        console.log(list);
        const filteredNotes = notes.filter(
          (item) => item.id === Number(listPer[0]?.touch[0].target.id)
        );
        if (filteredNotes.length === 0) {
          setListPer([]);
          return;
        }
        console.log(filteredNotes);

        const filteredListPer = listPer.filter(
          (item) =>
            item.touch[0].target !== document.querySelector(".playArea") &&
            document.querySelector(".touchContainer")
        );

        const filteredAcceptedList = acceptedList.filter(
          (item) =>
            item?.touch[0]?.target === filteredListPer[0]?.touch[0]?.target ||
            filteredListPer[1]?.touch[0]?.target
        );
        console.log(filteredAcceptedList);
        console.log(filteredListPer);
        if (filteredAcceptedList.length === 0) {
          if (filteredListPer.length === 2) {
            console.log("double");
            console.log(filteredListPer);
            console.log(notes);
            const filteredNotes = notes.filter(
              (item) =>
                item.id === Number(filteredListPer[1].touch[0].target.id) &&
                item.type === "startSlide"
            );
            console.log(filteredListPer);
            console.log(filteredNotes);
            const diffOne = Math.abs(
              filteredListPer[1].touch[0].pageX -
                filteredNotes[0]?.x +
                filteredListPer[1].touch[0].pageY -
                322
            );
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: filteredListPer[1].touch,
                quality:
                  diffOne < 30 ? (diffOne < 15 ? "Perfect" : "Good") : "Miss",
                type: filteredNotes[0]?.type || "",
              },
            ]);
            setListPer([]);
          } else {
            const filteredNotes = notes.filter(
              (item) =>
                item.id === Number(filteredListPer[0].touch[0].target.id) &&
                item.type === "startSlide"
            );
            const diffZero = Math.abs(
              filteredListPer[0].touch[0].pageX -
                filteredNotes[0]?.x +
                filteredListPer[0].touch[0].pageY -
                322
            );
            setAcceptedList((prevState) => [
              ...prevState,
              {
                touch: filteredListPer[0].touch,
                quality:
                  diffZero < 30 ? (diffZero < 15 ? "Perfect" : "Good") : "Miss",
                type: filteredNotes[0]?.type || "",
              },
            ]);
            setListPer([]);
          }
        } else {
          setListPer([]);
          return;
        }
      } else return;
    }

    if (holdList.length > 0) {
      console.log("1-H");
      const filteredNotes = notes.filter(
        (item) => item.endId === Number(holdList[0]?.touch[0].target.id)
      );
      if (filteredNotes.length === 0) {
        console.log("2-H");
        setHoldList([]);
        return;
      }
      const filteredAccepted = acceptedList.filter(
        (item) => item?.realId === Number(filteredNotes[0].id)
      );
      if (filteredAccepted.length > 0) {
        console.log("3-H");
        setHoldList([]);
        return;
      }
      console.log(filteredNotes);
      console.log("4-H");
      const filteredHoldList = holdList.filter(
        (item) =>
          item.touch[0].target !== document.querySelector(".playArea") &&
          document.querySelector(".touchContainer")
      );
      console.log(filteredHoldList);

      const filteredAcceptedList = acceptedList.filter((item) =>
        item?.type !== "startSlide"
          ? item?.touch[0]?.target === filteredHoldList[0]?.touch[0]?.target ||
            filteredHoldList[1]?.touch[0]?.target
          : false
      );

      console.log(filteredAcceptedList);

      if (filteredAcceptedList.length === 0) {
        if (filteredHoldList.length === 2) {
          console.log(filteredHoldList);
          console.log(notes);
          const filteredNotes = notes.filter(
            (item) =>
              item.endId === Number(filteredHoldList[1].touch[0].target.id) &&
              item.type === "holdSlide"
          );
          const diffOne = Math.abs(
            holdList[1]?.touch[0].pageX -
              filteredNotes[0]?.x +
              holdList[1]?.touch[0].pageY -
              322
          );
          if (diffOne >= 30) return;

          setAcceptedList((prevState) => [
            ...prevState,
            {
              touch: holdList[1]?.touch[0],
              realId: filteredNotes[0].id,
              endType: true,
              quality:
                diffOne < 30 ? (diffOne < 15 ? "Perfect" : "Good") : "Miss",
            },
          ]);
          setHoldList([]);
          setBeats((prevState) =>
            [...prevState].filter(
              (item) =>
                item.endId === Number(holdList[1]?.touch[0].target.id) &&
                item.type === "holdSlide"
            )
          );
        } else {
          console.log("Singlemove");
          console.log("6-H-Single");
          console.log(filteredHoldList);
          console.log(notes);
          const filteredNotes = notes.filter(
            (item) =>
              item.endId === Number(filteredHoldList[0].touch[0].target.id)
          );
          const diffZero = Math.abs(
            holdList[0]?.touch[0].pageX -
              filteredNotes[0]?.x +
              holdList[0]?.touch[0].pageY -
              322
          );
          if (diffZero >= 30) {
            console.log(diffZero);
            return;
          }

          setAcceptedList((prevState) => [
            ...prevState,
            {
              touch: holdList[0]?.touch[0],
              realId: filteredNotes[0].id,
              endType: true,
              quality:
                diffZero < 30 ? (diffZero < 15 ? "Perfect" : "Good") : "Miss",
            },
          ]);
          setHoldList([]);
          setBeats((prevState) =>
            [...prevState].filter(
              (item) => item.endId === Number(holdList[0]?.touch[0].target.id)
            )
          );
        }
      } else return;
    }
  }, [
    listPer,
    acceptedList.length,
    start,
    acceptedList,
    list,
    endList,
    moveList,
    holdList,
  ]);

  const missHandler = (id) => {
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
          quality: "Miss",
        },
      ]);
    }
  };

  // const pressHandler = (e) => {
  //   console.log(e);
  //   console.log("Pressed");
  // };

  // const pressUpHandler = (e) => {
  //   console.log(e);
  //   console.log("PressedUp");
  // };

  const clickHandler = (id) => {
    console.log(id);
    setBeats((prevState) => [...prevState].filter((item) => item.id !== id));
  };

  return (
    // <ReactHammer
    //   onPress={pressHandler}
    //   onPressUp={pressUpHandler}
    //   options={{
    //     recognizers: {
    //       tap: {
    //         time: 3000,
    //         threshold: 100,
    //       },
    //     },
    //   }}
    // >
    <div
      className="touchContainer"
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
      onTouchCancel={touchCancelHandler}
      onTouchMove={touchMoveHandler}
    >
      {/* <svg style={{ width: "1000", height: "1000" }}>
          <line
            style={{
              fill: "red",
              stroke: "white",
              strokeWidth: "2rem",
              zIndex: 2,
            }}
            x1="100"
            y1="100"
            x2="180"
            y2="322"
          ></line>
        </svg> */}
      {list.map((touch, i) => {
        return (
          <div
            style={{ left: `${touch.pageX}px`, top: `${touch.pageY}px` }}
            className="dot"
            id={touch.identifier}
            key={touch.identifier}
          ></div>
        );
      })}
      <div
        style={{
          top: `
        300px`,
        }}
        className="playArea"
      ></div>

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
                  style={{
                    fill: "red",
                    stroke: "white",
                    strokeWidth: "2rem",
                    position: "relative",
                    zIndex: 2,
                  }}
                  x1={item.x2}
                  y1={2500 - (item.dTime * 3) / 7}
                  x2={item.x1}
                  y2="2500"
                ></line>
              </svg>
              // <div
              //   key={item.id}
              //   id={item.id}
              //   className="Bdot"
              //   style={{
              //     left: `${beats[i - 1].x}px`,
              //     animationDelay: `${beats[i - 1].time + 1400}ms`,
              //     width: "4rem",
              //     // transform: "translateY(-100%)",
              //     // height: `${item.height}px`,
              //     // borderRadius: "0.5rem",
              //     // animationName: "swipeMoving",
              //   }}
              // ></div>
            );
          } else {
            return (
              <div
                onClick={(e, id) => {
                  console.log(item.id);
                  console.log(e);
                  e.preventDefault();
                  clickHandler(item.id);
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
      {/* {start &&
          beats.map((item, i) => {
            if (item.sw) {
              return (
                <ReactHammer
                  key={item.id}
                  onPress={pressHandler}
                  onPressUp={pressUpHandler}
                  options={{
                    recognizers: {
                      tap: {
                        time: 300,
                        threshold: 100,
                      },
                    },
                  }}
                >
                  <div
                    onClick={(e, id) => {
                      console.log(item.id);
                      console.log(e);
                      e.preventDefault();
                      clickHandler(item.id);
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
                      // transform: "translateY(-100%)",
                      // height: `${item.height}px`,
                      // borderRadius: "0.5rem",
                      // animationName: "swipeMoving",
                    }}
                  ></div>
                </ReactHammer>
              );
            } else {
              return (
                <div
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
          })} */}
      <div
        style={{
          backgroundColor: "white",
          textAlign: "center",
          height: "2rem",
          fontSize: "1.6rem",
        }}
      >
        {acceptedList[acceptedList?.length - 1]?.quality}
      </div>
    </div>
    // </ReactHammer>
  );
};

export default Rhythm;
