import React, { useState, useEffect } from "react";
import SlideBackground from "../SlideBackground/SlideBackground";
import { withRouter } from "react-router-dom";
import Navbar from "./HeaderNav/Navbar";
const Header = (props) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(true);
    });
    window.onscroll = function () {
      var doc = document.documentElement;
      if (doc.scrollTop === 0) {
        setScroll(false);
      }
    };
  }, []);
  return (
    <header id="header">
      <div className={`${scroll ? "header-scroll" : ""} `}>
        <Navbar scroll={scroll} />
      </div>
      {props.history.location.pathname === "/" ? <SlideBackground /> : null}
    </header>
  );
};

export default withRouter(Header);
