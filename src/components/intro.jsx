import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import photo from "../img/photo.png";

const Intro = () => {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="flex-container">
              <div>
                <h1 className="intro-title">I'm Kevin <br/> Baltodano</h1>
                <p className="intro-subtitle">
                  <span className="text-slider-items"></span>
                  <strong className="text-slider">
                    <Typed
                      strings={[
                        "Software Developer",
                        "Front End Developer",
                        "Back End Developer"
                      ]}
                      typeSpeed={80}
                      backDelay={1100}
                      backSpeed={30}
                      loop
                    />
                  </strong>
                </p>
                <p className="pt-3">
                  <a
                    className="btn btn-primary btn js-scroll px-4"
                    href="#work"
                    role="button"
                  >
                    Let's see my projects
                  </a>
                </p>
              </div>
              <div>
                <img src={photo} alt="" className="img-fluid photo" width="300" height="auto"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Intro;
