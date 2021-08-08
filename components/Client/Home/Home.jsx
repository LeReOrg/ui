import React, { useEffect } from "react";
import ProductType from "../ProductType/ProductType";
import Info from "../Info/Info";
import MoreInfo from "../MoreInfo/MoreInfo";
import InterestedItem from "../InterestedItem/InterestedItem";
import SlideBackground from "../SlideBackground/SlideBackground";
import styles from "./HomeStyled";
import { makeStyles } from "@material-ui/core/styles";

const HomePage = () => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();

  return (
    <>
      <SlideBackground />
      <div className={classes.pageContainer}>
        <ProductType />
        <MoreInfo />
        <InterestedItem />
        <Info />
      </div>
    </>
  );
};
export default HomePage;
