import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import SearchItemHeader from "../SearchItemHeader/SearchItemHeader";
import { styles } from "./HeaderNavStyled";
import { useMediaQuery } from "react-responsive";
import RightNavMenu from "./RightNavMenu";
import HeaderCart from "../HeaderCart/HeaderCart";
import { makeStyles } from "@material-ui/core/styles";

const Navbar = (props) => {
  const isMobile = useMediaQuery({ query: `(max-width: 920px)` });
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  return (
    <div id="header_nav" className={classes.nav_container}>
      <HeaderLogo scroll={props.scroll} />
      <SearchItemHeader />
      {isMobile && <HeaderCart />}
      {!isMobile && <RightNavMenu scroll={props.scroll} />}
    </div>
  );
};

export default Navbar;
