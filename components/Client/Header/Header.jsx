import React, { useState, useEffect } from "react";
import Navbar from "./HeaderNav/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./HeaderStyled";

const Header = (props) => {
  const [scroll, setScroll] = useState(false);
  const useStyles = makeStyles(styles);

  const classes = useStyles();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(true);
    });
    window.onscroll = function () {
      var doc = document.documentElement;
      if (doc.scrollTop < 2) {
        setScroll(false);
      }
    };
  }, []);
  return (
    <header className={classes.header}>
      <div className={`${scroll ? "header-scroll" : ""} `}>
        <Navbar scroll={scroll} />
      </div>
    </header>
  );
};

export default Header;
