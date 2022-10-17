import React, { useEffect, useState } from "react";
import MakeIt from "../pages/TypeIt";

const DB = ["WELCOME", "TO", "MY", "PORTFOLIO", <MakeIt />];

const LoadingPage = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const shuffle = () => {
      if (num > 3) {
        return;
      }
      setNum(num + 1);
    };
    const intervalID = setInterval(shuffle, 500);
    return () => clearInterval(intervalID);
  }, [num]);

  return (
    <div className="loadingPage">
      <div className="loading-word">{DB[num]}</div>
      <span className="glitch">LOADING</span>
    </div>
  );
};

export default LoadingPage;
