import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = (props) => {
  const [timer, setTimer] = useState("00:00:00");

  useEffect(() => {
    let x = setInterval(() => {
      if (!props.start) {
        setTimer("00:00:00");
        return;
      }
      // Get today's date and time
      // if (props.stop) {
      //   setTimer((prevTime) => {
      //     return prevTime;
      //   });
      //   return;
      // } else {
      //   let now = new Date().getTime();

      //   // Find the distance between now and the count down date
      //   let distance = now - props.start;
      //   // Time calculations for days, hours, minutes and seconds
      //   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      //   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      //   let cents = Math.floor((distance % 1000) / 10);

      //   // Display the result in the element with id="demo"
      //   // setTimer(minutes + ":" + seconds + ":" + cents);
      //   setTimer(
      //     `${minutes < 10 ? "0" : ""}${minutes}:${
      //       seconds < 10 ? "0" : ""
      //     }${seconds}:${cents < 10 ? "0" : ""}${cents}`
      //   );
      // }
      let now = new Date().getTime();

      let distance = now - props.start;

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let cents = Math.floor((distance % 1000) / 10);

      setTimer(
        `${minutes < 10 ? "0" : ""}${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}:${cents < 10 ? "0" : ""}${cents}`
      );
    }, 10);
    return () => clearInterval(x);
  }, [props.start, props.stop]);
  return (
    <div>
      <span className="timer">{timer}</span>
    </div>
  );
};

export default Timer;
