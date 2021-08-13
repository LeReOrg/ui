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
        <Image src={BackGround} width={1366} height={640} quality={100} />
      ) : (
        <Image
          src={BackGroundMobile}
          width={360}
          height={360}
          layout="responsive"
          quality={100}
        />
      )}
      {/* <Search /> */}
    </div>
  );
};

export default SlideBackground;
