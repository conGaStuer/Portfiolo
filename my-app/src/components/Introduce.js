import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faComputer,
  faDesktop,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

function Introduce() {
  return (
    <section id="introduce">
      <div className="introduce">
        <div className="cell">
          <div className="content">
            <div className="ctn">
              <span className="span1">INTRODUCE MYSELF</span>
              <span className="span2">WHAT AM I?</span>
            </div>
            <div className="text-ctn">
              My name is Tran Xuan Khuong, a student from SaiGon Technology
              University. I like art , manga , draw , watch anime , ... and the
              most is Code. I will be a Front-end Developer in future or not :v
            </div>
          </div>
        </div>
        <div className="cell">
          {" "}
          <div className="content">
            <div className="ctn">
              <div className="square">
                <FontAwesomeIcon icon={faTerminal} className="icons" />
              </div>
              <div className="descript">My Collections</div>
            </div>
            <div className="text-ctn">
              HTML, CSS , Javascript , C++ , C# , ReactJS . That's not more ,
              but i will be update day by date in future.
            </div>
          </div>
        </div>
        <div className="cell">
          {" "}
          <div className="content">
            <div className="ctn">
              <div className="square">
                <FontAwesomeIcon icon={faDesktop} className="icons" />
              </div>
              <div className="descript">HTML, CSS</div>
            </div>
            <div className="text-ctn">
              I can create a static website by HTML and CSS . I confident That i
              can design a lots of static website by my experience.
            </div>
          </div>
        </div>
        <div className="cell">
          <button className="btn-2">
            <span>view all my Collections</span>
          </button>
        </div>
        <div className="cell">
          {" "}
          <div className="content">
            <div className="ctn">
              <div className="square">
                <FontAwesomeIcon icon={faComputer} className="icons" />
              </div>
              <div className="descript">Javascript</div>
            </div>
            <div className="text-ctn">
              I have some project combinated by JS and HTML,CSS but not large.
              But I know fundamental about JS.
            </div>
          </div>
        </div>
        <div className="cell">
          {" "}
          <div className="content">
            <div className="ctn">
              <div className="square">
                <FontAwesomeIcon icon={faCode} className="icons" />
              </div>
              <div className="descript">ReactJS</div>
            </div>
            <div className="text-ctn">
              ReactJS is my favorite Framework , i use it a lot. Now, i use it
              for this website , nah.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduce;
