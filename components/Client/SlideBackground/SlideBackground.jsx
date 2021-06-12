import React from "react";
import Search from "../Search/Search";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./SlideBackgroundStyled";
import Image from "next/image";
import BackGround from "../../../assets/background_v2.png";

const SlideBackground = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.root} id="background">
      <div>
        <Image src={BackGround} width={1920} height={640} layout="responsive" />
      </div>
      <Search />
    </div>
  );
};

export default SlideBackground;
