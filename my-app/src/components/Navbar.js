import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faFacebookMessenger,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [logo, setLogo] = React.useState({
    isClick: false,
    isDisplay: false,
  });
  const Toggles = () => {
    setLogo((prev) => {
      return {
        isClick: !prev.isClick,
        isDisplay: !prev.isDisplay,
      };
    });
  };

  const style = {
    backgroundColor: logo.isClick ? "#160c17" : "#160c17",
    height: logo.isClick ? "600px" : "75px",
    transition: "all 0.4s ease-in-out",
    zIndex: "10",
  };
  const style1 = {
    visibility: logo.isClick ? "hidden" : "visible",
  };

  return (
    <div className="nav-bar" style={style}>
      <nav>
        <div className="logo" style={style1}>
          <FontAwesomeIcon icon={faCode} />
          TraXuan
        </div>
        <ul className={logo.isClick ? "menu active" : "menu"}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#project">My Projects</a>
          </li>
          <li>
            <a href="#portfiolo">Portfolio</a>
          </li>
          <li>
            <a href="#introduce">Introduce</a>
          </li>
          <li>
            <a href="#pages">Pages</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="social">
          <li>
            <a href="#face">
              <FontAwesomeIcon icon={faFacebookF} className="icon" />
            </a>
          </li>
          <li>
            <a href="#face">
              {" "}
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
          </li>
          <li>
            <a href="#face">
              {" "}
              <FontAwesomeIcon icon={faFacebookMessenger} className="icon" />
            </a>
          </li>
          <li>
            <a href="#face">
              {" "}
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
          </li>
        </ul>
      </nav>
      <button className="nav-btn" onClick={Toggles}>
        {logo.isClick ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </div>
  );
}

export default Navbar;
