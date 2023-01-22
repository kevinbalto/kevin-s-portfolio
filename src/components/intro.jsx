import React from "react";
import "./stars.scss";
import Typed from "react-typed";

const Intro = () => {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div>
          <div className="container-fluid box text-center">
            <h1 className="intro-title">I'm Kevin Baltodano</h1>
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
                className="btn btn-light btn js-scroll px-4"
                href="#work"
                role="button"
              >
                Let's see my work
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

export default Intro;
