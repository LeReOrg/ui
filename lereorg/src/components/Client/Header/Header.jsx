import React, { useState, useEffect } from "react";
import SlideBackground from "../SlideBackground/SlideBackground";
import { withRouter } from "react-router-dom";
import Navbar from "./HeaderNav/Navbar";
const Header = (props) => {
  let firstHeight = "";
  const statePath = props.history.location.pathname;
  
  const [scroll, setScroll] = useState(false);
  console.log(statePath)
  const [changePath ,setPath] = useState(statePath) 
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
  },[])
  // useEffect(() => {
  //   // if(statePath === "/"){
  //   //   firstHeight = document.getElementById("header_nav").offsetHeight + "px";
  //   //   console.log(firstHeight)
  //   // }
  //     let header = document.getElementById("header");
  //     let header_height = document.getElementById("header_nav").offsetHeight + "px";
  //     console.log(header_height);
     
  //   if(statePath !== "/"){
      
  //     header.style.height = header_height;
  //   }else{
  //     header.style.height = firstHeight;
  //   }
  // }, [statePath]);
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
