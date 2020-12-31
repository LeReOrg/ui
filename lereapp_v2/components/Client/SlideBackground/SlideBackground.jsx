import React from "react";
import Search from "../Search/Search";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./SlideBackgroundStyled";

const useStyles = makeStyles(styles);

const SlideBackground = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="background">
      <div className={classes.background}></div>
      <Search />
    </div>
  );
};

export default SlideBackground;
