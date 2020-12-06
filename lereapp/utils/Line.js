import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/LineStyled";

const Line = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <hr className={classes.main} />
  );
};

export default Line;
