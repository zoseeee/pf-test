import React, { useEffect, useState } from "react";
import TypeItTest from "./TypeIt";
import "../css/Main.scss";

const DB = ["WELCOME", "TO", "MY", "PORTFOLIO", <TypeItTest />];

const LandingPage = () => {
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
    <div className="LangdingPage">
      <span>{DB[num]}</span>
    </div>
  );
};

export default LandingPage;
