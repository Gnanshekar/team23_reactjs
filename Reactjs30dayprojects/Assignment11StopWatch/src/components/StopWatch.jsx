import React, { useState, useEffect } from 'react';
import start_icon from './start.png';
import reset_icon from './reset.png';
import stop_icon from './stop.png';


const Stopwatch = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  const formatTime = (value) => (value < 10 ? `0$  {value}` : value);

  const startWatch = () => {
    if (timer !== null) clearInterval(timer);
    setTimer(setInterval(updateTime, 1000));
  };

  const stopWatch = () => {
    if (timer !== null) clearInterval(timer);
  };

  const resetWatch = () => {
    if (timer !== null) clearInterval(timer);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  const updateTime = () => {
    setTime((prevTime) => {
      let { hours, minutes, seconds } = prevTime;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      return { hours, minutes, seconds };
    });
  };

  return (
    <div className="stopWatch">
      <h1 id="displayTime">
        SSSS
        {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
      </h1>
      <img src="./background.png" alt="" />
      <div className="buttons">
        <img src="./background.png" alt="Stop" onClick={stopWatch} />
        <img src={start_icon} alt="Start" onClick={startWatch} />
        <img src={reset_icon} alt="Reset" onClick={resetWatch} />
      </div>
    </div>
  );
};

export default Stopwatch;

// body {
//   background: #edeaff;
// }

// .stopWatch {
//   width: 90%;
//   max-width: 600px;
//   background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
//    url(./components/background.png);
//   background-size: cover;
//   background-position: center;
//   text-align: center;
//   padding: 40px 0;
//   color: #fff;
//   margin: 200px auto 0;
//   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
// }

// .stopWatch h1 {
//   margin-top: 60px;
//   align-items: center;
//   font-weight: 300;
// }

// .buttons {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .buttons img {
//   width: 50px;
//   margin: 0 20px;
//   cursor: pointer;
// }

// .buttons img:nth-child(2) {
//   width: 80px;
// }


