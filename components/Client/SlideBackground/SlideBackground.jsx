import React from "react";
import Search from "../Search/Search";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./SlideBackgroundStyled";
import Image from "next/image";
import BackGround from "../../../assets/background_v2.png";
import BackGroundMobile from "../../../assets/background_mobile.png";

import { useMediaQuery } from "@material-ui/core";

const SlideBackground = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div className={classes.rootBackGround} id="background">
      {!isMobile ? (
        <Image src={BackGround} width={1920} height={700} layout="responsive" />
      ) : (
        <Image
          src={BackGroundMobile}
          width={375}
          height={375}
          layout="responsive"
        />
      )}
      {/* <Search /> */}
    </div>
  );
};

export default SlideBackground;
