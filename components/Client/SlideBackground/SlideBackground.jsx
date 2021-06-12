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
  console.log(isMobile);
  return (
    <div className={classes.root} id="background">
      <div>
        {!isMobile ? (
          <Image
            src={BackGround}
            width={1920}
            height={640}
            layout="responsive"
          />
        ) : (
          <Image
            src={BackGroundMobile}
            width={360}
            height={360}
            layout="responsive"
          />
        )}
      </div>
      <Search />
    </div>
  );
};

export default SlideBackground;
