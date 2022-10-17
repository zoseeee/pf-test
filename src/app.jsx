import React, { useEffect, useState } from "react";
import LoadingPage from "./component/LoadingPage";
import "../src/css/Main.scss";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
<<<<<<< HEAD
import Line from "./pages/Line";

const App = () => {
=======
<<<<<<< HEAD

const App = () => {
=======
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {

>>>>>>> 2965777d1722aa2618ebec8e786d20a7e2c967e4
>>>>>>> 3c2c4b459d6fd1f5d9caf0a4dd1562123173309d
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
  //       <About />
  //       <Line />
  //       <Project />
  //     </main>
  //   </div>
  // );

  return (
    <div className="Wrap">
      <Header />
      <main>
        <Home />
        <About />
        <Line />
        <Project />
      </main>
    </div>
<<<<<<< HEAD
=======
  ) : (
<<<<<<< HEAD
    <div className="Wrap">
      <Header />
      <main>
        <Home />
        <About />
        <Project />
      </main>
    </div>
=======
    <ParallaxProvider>
      <div className="Wrap">
        <Header />
        <main>
          <Home />
          <About />
          <Project />
        </main>
      </div>
    </ParallaxProvider>
>>>>>>> 2965777d1722aa2618ebec8e786d20a7e2c967e4
>>>>>>> 3c2c4b459d6fd1f5d9caf0a4dd1562123173309d
  );
};

export default App;
