import React, { useEffect, useState } from "react";
import LoadingPage from "./component/LoadingPage";
import "../src/css/Main.scss";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Forest from "./pages/Forest";
import Divider from "./pages/Divider";

const App = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 8500);
    return () => {
      clearTimeout(timer);
    };
  });

  // 로딩화면 포함
  // return load === true ? (
  //   <div>
  //     <LoadingPage />
  //   </div>
  // ) : (
  //   <div className="Wrap">
  //     <Header />
  //     <main>
  //       <Home />
  //       <Divider />
  //       <About />
  //       <Forest />
  //       <Project />
  //     </main>
  //   </div>
  // );

  return (
    <div className="Wrap">
      <Header />
      <main>
        <Home />
        <Divider />
        <About />
        <Forest />
        <Project />
      </main>
    </div>
  );
};

export default App;
