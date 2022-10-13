import React from "react";
import LoadingPage from "./component/LoadingPage";
import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import About from "./component/About";
import Project from "./component/Project";
import "../src/css/Main.scss";

const App = () => {
  return (
    <>
      {/* <LoadingPage /> */}
      <div className="Wrap">
        <Header />
        <main>
          {/* <MainVisual /> */}
          <About />
          <Project />
        </main>
      </div>
    </>
  );
};

export default App;
