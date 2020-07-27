import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./HeaderNav/Navbar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    background : "#FFFFFF",
    boxShadow : "0px 4px 8px rgba(0, 0, 0, 0.1)",
    
  },
}));
const Header = (props) => {
  const [scroll, setScroll] = useState(false);
  const classes = useStyles();
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
  return (
    <header className={classes.header}>
      <div className={`${scroll ? "header-scroll" : ""} `}>
        <Navbar scroll={scroll} />
      </div>
    </header>
  );
};

export default withRouter(Header);
