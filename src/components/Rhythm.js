import { useEffect, useState } from "react";
import "./Rhythm.css";

// const r = document.querySelector(":root");
const notesDisp = [
  // { x: 100, time: 0, id: 1, type: "swipe", height: 400 },
  { x: 280, time: 0, id: 1, sw: 1 },
  { h: true, x1: 280, x2: 120, time: 0, id: 2 },
  { x: 120, time: 1000, id: 3, sw: 1, moveId: 1 },
  { h: true, x1: 120, x2: 280, time: 1000, id: 4 },
  { x: 280, time: 2000, id: 5, sw: 1, endId: 1 },
  // { h: true, x1: 120, x2: 280, time: 1000, id: 4 },
  // { x: 120, time: 0, id: 4, sw: 2 },
  // { x: 120, time: 100, id: 5, sw: 2 },
  // { x: 120, time: 200, id: 6, sw: 2 },
  // { x: 280, time: 0, id: 2 },
  // { x: 280, time: 1000, id: 3 },
  // { x: 110, time: 1300, id: 4 },
  // { x: 275, time: 1300, id: 5 },
];

const notes = [
  // { x: 100, time: 0, id: 1, type: "swipe", height: 400 },
  { x: 280, time: 0, id: 1, sw: 1 },
  { x: 120, time: 1000, id: 3, sw: 1, moveId: 1 },
  { x: 280, time: 2000, id: 5, sw: 1, endId: 1 },
  // { h: true, x1: 120, x2: 280, time: 1000, id: 4 },
  // { x: 120, time: 0, id: 4, sw: 2 },
  // { x: 120, time: 100, id: 5, sw: 2 },
  // { x: 120, time: 200, id: 6, sw: 2 },
  // { x: 280, time: 0, id: 2 },
  // { x: 280, time: 1000, id: 3 },
  // { x: 110, time: 1300, id: 4 },
  // { x: 275, time: 1300, id: 5 },
];

const Rhythm = ({ start }) => {
  const [list, setList] = useState([]);
  const [listPer, setListPer] = useState([]);
  const [acceptedList, setAcceptedList] = useState([]);
  const [pressList, setPressList] = useState([]);
  const [beats, setBeats] = useState(notes);
  const [endList, setEndList] = useState([]);
  const [moveList, setMoveList] = useState([]);

  console.log("Top");

  // console.log(list);
  // console.log(listPer);
  // console.log(pressList);
  // console.log(endList);
  // console.log(beats);
  // console.log(moveList);
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
  };

  const touchMoveHandler = (e) => {
    console.log("Move");
    console.log(e);
    const ch = [...e.changedTouches].map((item) => item.identifier);
    if (ch.length === 0) return;
    setList((prevState) =>
      [...prevState].map((item, i) => {
        const k = [...e.changedTouches].filter(
          (touch) => touch.identifier === item.identifier
        );
        return ch.includes(item.identifier) ? k[0] : item;
      })
    );
    setMoveList([{ touch: [...e.changedTouches] }]);
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
  };

  const touchCancelHandler = (e) => {
    console.log("cancel");
    setList([]);
  };

  useEffect(() => {
    if (acceptedList.length < notes.length + 1) {
      if (moveList.length > 0) {
        const filteredNotes = notes.filter(
          (item) => item.moveId === Number(moveList[0]?.touch[0].target.id)
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
            (item) => item.moveId === Number(moveList[0]?.touch[0].target.id)
          )
        );
      }

      if (endList.length > 0) {
        const filteredNotes = notes.filter(
          (item) => item.endId === Number(endList[0]?.touch[0].target.id)
        );
        if (filteredNotes.length === 0) return;
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

      console.log(listPer);
      console.log(list);
      const filteredListPer = listPer.filter(
        (item) =>
          item.touch[0].target !== document.querySelector(".playArea") &&
          document.querySelector(".touchContainer")
      );
      // const filteredList = list?.filter(
      //   (item) =>
      //     item?.target !== document.querySelector(".playArea") &&
      //     document.querySelector(".touchContainer")
      // );

      if (filteredListPer.length > 0) {
        const filteredAcceptedList = acceptedList.filter(
          (item) =>
            item?.touch[0]?.target === filteredListPer[0]?.touch[0]?.target ||
            filteredListPer[1]?.touch[0]?.target
        );
        console.log(filteredAcceptedList);
        if (filteredAcceptedList.length === 0) {
          if (filteredListPer.length === 2) {
            console.log("double");
            console.log(filteredListPer);
            console.log(notes);
            const filteredNotes = notes.filter(
              (item) =>
                item.id === Number(filteredListPer[1].touch[0].target.id)
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
                sw: filteredNotes[0]?.sw || "",
              },
            ]);
            setListPer([]);
          } else {
            // console.log("single");
            // console.log(filteredList);
            // console.log(acceptedList);
            // const filteredSwipe = acceptedList.filter(
            //   (item) =>
            //     item?.sw && item?.touch[0].pageX === filteredList[0]?.pageX
            // );
            // if (filteredSwipe.length > 0) {
            //   console.log(filteredSwipe);
            //   setAcceptedList((prevState) => [
            //     ...prevState,
            //     {
            //       touch: [{ target: filteredSwipe[0].touch[0].target }],
            //       quality: filteredSwipe[0].quality,
            //     },
            //   ]);
            // } else {
            const filteredNotes = notes.filter(
              (item) =>
                item.id === Number(filteredListPer[0].touch[0].target.id)
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
                sw: filteredNotes[0]?.sw || "",
              },
            ]);
            setListPer([]);
            // }
          }
        } else return;
      } else return;
    } else return;
  }, [
    listPer,
    acceptedList.length,
    start,
    acceptedList,
    list,
    endList,
    moveList,
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

  const pressHandler = (e) => {
    console.log(e);
    console.log("Pressed");
  };

  const pressUpHandler = (e) => {
    console.log(e);
    console.log("PressedUp");
  };

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
                  // backgroundColor: "red",
                  width: "1000",
                  height: "1000",
                  animationDelay: `${item.time}ms`,
                  top: `-148px`,
                  animationDuration: `${2400}ms`,
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
                  y1="71"
                  x2={item.x1}
                  y2="500"
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
