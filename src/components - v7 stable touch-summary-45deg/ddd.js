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
  const [beats, setBeats] = useState(notes);
  const [tapList, setTapList] = useState([]);
  const [endList, setEndList] = useState([]);
  // const [moveList, setMoveList] = useState([]);
  const [holdList, setHoldList] = useState([]);
  const [holdingEffect, setHoldingEffect] = useState(false);

  console.log("Top");

  console.log(beats);

  const touchStartHandler = (e) => {
    console.log(e);
    const dur = new Date().getTime() - start;
    console.log("start");
  };

  const touchMoveHandler = (e) => {
    const dur = new Date().getTime() - start;
    console.log("Move");
    console.log(e);
    const ch = [...e.changedTouches].map((item) => item.identifier);
    console.log(ch);
    if (ch.length === 0) return;
    setList((prevState) =>
      [...prevState].map((item, i) => {
        const k = [...e.changedTouches].filter(
          (touch) => item.identifier === touch.identifier
        );
        return ch.includes(item.identifier) ? k[0] : item;
      })
    );
    console.log(list);

    // if (moveList.length > 0) {
    //   setMoveList((prevState) =>
    //     [...prevState].map((item, i) => {
    //       const k = [...e.changedTouches].filter(
    //         (touch) => item.identifier === touch.identifier
    //       );
    //       return ch.includes(item.identifier)
    //         ? { touch: k[0], dur: dur }
    //         : item;
    //     })
    //   );
    // } else {
    //   setMoveList({ touch: [...e.changedTouches], dur: dur });
    // }

    // setMoveList((prevState) =>
    //   [...prevState].map((item, i) => {
    //     const k = [...e.changedTouches].filter(
    //       (touch) => item.identifier === touch.identifier
    //     );
    //     return ch.includes(item.identifier) ? k[0] : item;
    //   })
    // );
    setHoldList((prevState) => [{ touch: [...e.changedTouches], dur: dur }]);

    // setHoldList((prevState) =>
    //   [...prevState].map((item, i) => {
    //     const k = [...e.changedTouches].filter(
    //       (touch) => item.identifier === touch.identifier
    //     );
    //     return ch.includes(item.identifier) ? k[0] : item;
    //   })
    // );
  };

  const touchEndHandler = (e) => {
    const dur = new Date().getTime() - start;
    console.log(e);
    console.log("end");
    const ch = [...e.changedTouches].map((item) => item.identifier);
    if (ch.length === 0) return;
    setList((prevState) => {
      return [...prevState].filter(
        (item) => item.identifier !== e.changedTouches[0].identifier
      );
    });
    setEndList((prevState) => [
      ...prevState,
      { touch: [...e.changedTouches], dur: dur },
    ]);

    setHoldList((prevState) => {
      return [...prevState].filter(
        (item) => item?.touch[0]?.identifier !== e.changedTouches[0].identifier
      );
    });

    // setMoveList((prevState) => {
    //   return [...prevState].filter(
    //     (item) => item?.touch[0]?.identifier !== e.changedTouches[0].identifier
    //   );
    // });
  };

  const touchCancelHandler = (e) => {
    console.log("cancel");
    setTapList([]);
  };

  useEffect(() => {
    if (acceptedList.length < notes.length) {
    }
  }, [
    tapList,
    acceptedList.length,
    start,
    acceptedList,
    endList,
    // moveList,
    holdList,
    holdingEffect,
    list,
  ]);
};

if (endList.length > 0) {
  const filteredNotes = notes.filter(
    (item) =>
      item.endId === Number(endList[0]?.touch[0].target.id) &&
      item.type === "endSlide"
  );
  if (filteredNotes.length === 0) {
    setEndList([]);
    return;
  }
  console.log(filteredNotes);

  const filteredEndList = endList.filter(
    (item) => item.touch[0].target.className === "Bdot"
  );
  console.log(filteredEndList);

  const filteredAcceptedList = acceptedList.filter((item) =>
    item?.type === "endSlide"
      ? item?.endId === filteredEndList[0]?.touch[0]?.target ||
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
      const diffDuration = Math.abs(
        endList[1]?.dur - filteredNotes[0]?.time - 1120
      );
      console.log(diffDuration);
      console.log(diffOne);
      if (diffOne >= 30 || diffDuration > 300) return;
      setAcceptedList((prevState) => [
        ...prevState,
        {
          touch: endList[1]?.touch[0],
          realId: filteredNotes[0].id,
          endType: true,
          quality: diffOne < 30 ? (diffOne < 15 ? "Perfect" : "Good") : "Miss",
          type: filteredNotes[0]?.type || "",
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
      const diffDuration = Math.abs(
        endList[0]?.dur - filteredNotes[0]?.time - 1120
      );
      console.log(diffDuration);
      console.log(diffZero);
      if (diffZero >= 30 || diffDuration > 300) return;

      setAcceptedList((prevState) => [
        ...prevState,
        {
          touch: endList[0]?.touch[0],
          realId: filteredNotes[0].id,
          endType: true,
          quality:
            diffZero < 30 ? (diffZero < 15 ? "Perfect" : "Good") : "Miss",
          type: filteredNotes[0]?.type || "",
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

if (holdList.length > 0) {
  console.log(holdList);
  console.log(notes);
  const filteredNotes = notes.filter(
    (item) =>
      item.endId === Number(holdList[0]?.touch[0].target.id) &&
      item.type === "holdSlide"
  );
  if (filteredNotes.length === 0) {
    console.log("1-h");
    setHoldList([]);
    return;
  }
  console.log(filteredNotes);
  console.log(acceptedList);
  const filteredAccepted = acceptedList.filter(
    (item) => item?.realId === Number(filteredNotes[0].id)
  );
  if (filteredAccepted.length > 0) {
    console.log("2-h");
    setHoldList([]);
    return;
  }
  console.log("3-h");
  const filteredHoldList = holdList.filter(
    (item) => item.touch[0].target.className === "Bdot"
    // item.touch[0].target !== document.querySelector(".playArea") &&
    // document.querySelector(".touchContainer")
  );
  console.log(filteredHoldList);

  const filteredAcceptedList = acceptedList.filter((item) =>
    item?.type === "holdSlide"
      ? item?.endId === filteredHoldList[0]?.touch[0]?.target ||
        filteredHoldList[1]?.touch[0]?.target
      : false
  );

  console.log(filteredAcceptedList);

  if (filteredAcceptedList.length === 0) {
    if (filteredHoldList.length === 2) {
      console.log("DoubleHold");
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
      // const diffDuration = Math.abs(
      //   holdList[1]?.dur - filteredNotes[0]?.time - 1120
      // );
      // console.log(diffDuration);
      // console.log(diffOne);
      // if (diffOne >= 30 || diffDuration > 300) return;
      if (diffOne >= 30) return;

      setAcceptedList((prevState) => [
        ...prevState,
        {
          touch: holdList[1]?.touch[0],
          realId: filteredNotes[0].id,
          endType: true,
          quality: diffOne < 30 ? (diffOne < 15 ? "Perfect" : "Good") : "Miss",
          type: filteredNotes[0]?.type || "",
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
      console.log("SingleHold");
      console.log(filteredHoldList);
      console.log(notes);
      const filteredNotes = notes.filter(
        (item) => item.endId === Number(filteredHoldList[0].touch[0].target.id)
      );
      const diffZero = Math.abs(
        holdList[0]?.touch[0].pageX -
          filteredNotes[0]?.x +
          holdList[0]?.touch[0].pageY -
          322
      );
      // const diffDuration = Math.abs(
      //   holdList[0]?.dur - filteredNotes[0]?.time - 1120
      // );
      // console.log(diffDuration);
      // console.log(diffZero);
      // if (diffZero >= 30 || diffDuration > 300) return;
      if (diffZero >= 30) return;
      console.log(diffZero);

      setAcceptedList((prevState) => [
        ...prevState,
        {
          touch: holdList[0]?.touch[0],
          realId: filteredNotes[0].id,
          endType: true,
          quality:
            diffZero < 30 ? (diffZero < 15 ? "Perfect" : "Good") : "Miss",
          type: filteredNotes[0]?.type || "",
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

if (tapList.length > 0) {
  console.log(tapList);
  const filteredNotes = notes.filter(
    (item) =>
      item.id === Number(tapList[0]?.touch[0].target.id) &&
      item.type === "startSlide"
  );
  if (filteredNotes.length === 0) {
    setTapList([]);
    return;
  }
  console.log(filteredNotes);

  const filteredTapList = tapList.filter(
    (item) => item.touch[0].target.className === "Bdot"
  );

  const filteredAcceptedList = acceptedList.filter((item) =>
    item?.type === "startSlide"
      ? item?.touch[0]?.target.id === filteredTapList[0]?.touch[0]?.target ||
        filteredTapList[1]?.touch[0]?.target
      : false
  );
  console.log(filteredAcceptedList);
  console.log(filteredTapList);
  if (filteredAcceptedList.length === 0) {
    if (filteredTapList.length === 2) {
      console.log("double");
      console.log(filteredTapList);
      console.log(notes);
      const filteredNotes = notes.filter(
        (item) =>
          item.id === Number(filteredTapList[1].touch[0].target.id) &&
          item.type === "startSlide"
      );
      console.log(filteredTapList);
      console.log(filteredNotes);
      const diffOne = Math.abs(
        filteredTapList[1].touch[0].pageX -
          filteredNotes[0]?.x +
          filteredTapList[1].touch[0].pageY -
          322
      );
      setAcceptedList((prevState) => [
        ...prevState,
        {
          touch: filteredTapList[1].touch,
          quality: diffOne < 30 ? (diffOne < 15 ? "Perfect" : "Good") : "Miss",
          type: filteredNotes[0]?.type || "",
          tapId: filteredTapList[1].touch[0].target.id,
        },
      ]);
      setTapList([]);
    } else {
      const filteredNotes = notes.filter(
        (item) =>
          item.id === Number(filteredTapList[0].touch[0].target.id) &&
          item.type === "startSlide"
      );
      const diffZero = Math.abs(
        filteredTapList[0].touch[0].pageX -
          filteredNotes[0]?.x +
          filteredTapList[0].touch[0].pageY -
          322
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
      setTapList([]);
    }
  } else {
    setTapList([]);
    return;
  }
} else return;

//dddddddddddddddddddddddddddddddddddddddddddd///
const touchMoveHandler = (e) => {
  const dur = new Date().getTime() - start;
  console.log("Move");
  console.log(e);

  const holdList = [{ touch: [...e.changedTouches], dur: dur }];
  console.log(holdList);

  if (acceptedList.length < notes.length) {
    if (holdList.length > 0) {
      console.log(holdList);
      console.log(notes);
      const filteredNotes = notes.filter(
        (item) =>
          item.endId === Number(holdList[0]?.touch[0].target.id) &&
          item.type === "holdSlide"
      );
      if (filteredNotes.length === 0) {
        console.log("1-h");
        return;
      }
      console.log(filteredNotes);
      console.log(acceptedList);
      const filteredAccepted = acceptedList.filter(
        (item) => item?.realId === Number(filteredNotes[0].id)
      );
      if (filteredAccepted.length > 0) {
        console.log("2-h");
        return;
      }
      console.log("3-h");
      const filteredHoldList = holdList.filter(
        (item) => item.touch[0].target.className === "Bdot"
        // item.touch[0].target !== document.querySelector(".playArea") &&
        // document.querySelector(".touchContainer")
      );
      console.log(filteredHoldList);

      const filteredAcceptedList = acceptedList.filter((item) =>
        item?.type === "holdSlide"
          ? item?.endId === filteredHoldList[0]?.touch[0]?.target ||
            filteredHoldList[1]?.touch[0]?.target
          : false
      );

      console.log(filteredAcceptedList);

      if (filteredAcceptedList.length === 0) {
        if (filteredHoldList[0].touch.length === 2) {
          console.log("DoubleHold");
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
          // const diffDuration = Math.abs(
          //   holdList[1]?.dur - filteredNotes[0]?.time - 1120
          // );
          // console.log(diffDuration);
          // console.log(diffOne);
          // if (diffOne >= 30 || diffDuration > 300) return;
          if (diffOne >= 30) return;

          setAcceptedList((prevState) => {
            const Duplicate = [...prevState]?.filter(
              (item) => item?.realId === filteredNotes[0].id
            );
            if (Duplicate.length === 0) {
              return [
                ...prevState,
                {
                  touch: holdList[1]?.touch[0],
                  realId: filteredNotes[0].id,
                  endType: true,
                  quality:
                    diffOne < 30 ? (diffOne < 15 ? "Perfect" : "Good") : "Miss",
                  type: filteredNotes[0]?.type || "",
                },
              ];
            } else return [...prevState];
          });
          setBeats((prevState) =>
            [...prevState].filter(
              (item) =>
                item.endId === Number(holdList[1]?.touch[0].target.id) &&
                item.type === "holdSlide"
            )
          );
        } else {
          console.log("SingleHold");
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
          // const diffDuration = Math.abs(
          //   holdList[0]?.dur - filteredNotes[0]?.time - 1120
          // );
          // console.log(diffDuration);
          // console.log(diffZero);
          // if (diffZero >= 30 || diffDuration > 300) return;
          if (diffZero >= 30) return;
          console.log(diffZero);

          setAcceptedList((prevState) => {
            const Duplicate = [...prevState]?.filter(
              (item) => item?.realId === filteredNotes[0].id
            );
            if (Duplicate.length === 0) {
              return [
                ...prevState,
                {
                  touch: holdList[1]?.touch[0],
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
              (item) => item.endId === Number(holdList[0]?.touch[0].target.id)
            )
          );
        }
      } else return;
    }
  }
};
