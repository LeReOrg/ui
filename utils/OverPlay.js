import React from "react";
import { overPlayState } from "../lib/recoil-root";
import { useRecoilValue } from "recoil";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../styles/AppStyled"; // styles of component
export default function OverPlay() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const showOverPlay = useRecoilValue(overPlayState);
  console.log(showOverPlay);
  return <>{showOverPlay && <div className={classes.over_play}></div>}</>;
}
