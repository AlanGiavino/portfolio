import "./Intro.scss";
import {init} from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["FrontEnd Developer", "Graphic Designer"],
          });
        }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="img" />
                </div>
            </div>
            <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Alan Giavino</h1>
          <h3>
          I'm <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
    )
}
