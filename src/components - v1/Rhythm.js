import { useEffect, useState } from "react";
import "./Rhythm.css";
import ReactHammer from "react-hammerjs";

// const r = document.querySelector(":root");
const notes = [
  // { x: 100, time: 0, id: 1, type: "swipe", height: 400 },
  { x: 280, time: 0, id: 1, sw: 1 },
  { x: 280, time: 100, id: 2, sw: 1 },
  { x: 280, time: 200, id: 3, sw: 1 },
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

  console.log("Top");

  console.log(list);
  console.log(listPer);
  console.log(acceptedList);
  console.log(pressList);

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
    // setEndList((prevState) => [...prevState, e.changedTouches[0]]);
  };

  const touchCancelHandler = (e) => {
    console.log("cancel");
    setList([]);
  };

  useEffect(() => {
    if (acceptedList.length < notes.length + 1) {
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
  }, [listPer, acceptedList.length, start, acceptedList, list]);

  const missHandler = (id) => {
    console.log(id.target);
    const filteredAcceptedList = acceptedList.filter(
      (item) => item?.touch[0]?.target === id.target
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

  const swipeHandler = (e) => {
    console.log(e);
    console.log("Swiped");
  };

  return (
    <ReactHammer
      onPress={pressHandler}
      onPressUp={pressUpHandler}
      options={{
        recognizers: {
          tap: {
            time: 3000,
            threshold: 10,
          },
        },
      }}
    >
      <div
        className="touchContainer"
        onTouchStart={touchStartHandler}
        onTouchEnd={touchEndHandler}
        onTouchCancel={touchCancelHandler}
        onTouchMove={touchMoveHandler}
      >
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
          notes.map((item, i) => {
            if (item.sw) {
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
                    // transform: "translateY(-100%)",
                    // height: `${item.height}px`,
                    // borderRadius: "0.5rem",
                    // animationName: "swipeMoving",
                  }}
                ></div>
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
          })}
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
    </ReactHammer>
  );
};

export default Rhythm;
