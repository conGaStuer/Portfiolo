// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMagnifyingGlass,
//   faHouse,
//   faRectangleList,
//   faSquarePlus,
//   faHeartCirclePlus,
//   faGlobe,
// } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Introduce from "./components/Introduce";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Introduce />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
