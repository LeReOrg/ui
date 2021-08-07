import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import SearchItemHeader from "../SearchItemHeader/SearchItemHeader";
import { styles } from "./HeaderNavStyled";
import { useMediaQuery } from "react-responsive";
import RightNavMenu from "./RightNavMenu";
import HeaderCart from "../HeaderCart/HeaderCart";
import { makeStyles } from "@material-ui/core/styles";
import BurgerMobile from "./BurgerMobile";
import { useRecoilState } from "recoil";
import { showMobileSearchIconState } from "../../../../lib/recoil-root";

const Navbar = (props) => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const [showMobileSearchIcon, setShowMobileSearchIcon] = useRecoilState(
    showMobileSearchIconState
  );
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  return (
    <div className={classes.nav_container}>
      <HeaderLogo scroll={props.scroll} />
      <SearchItemHeader />
      <div className={classes.nav_container_mobile}>
        {isMobile && !showMobileSearchIcon && (
          <div
            onClick={() => setShowMobileSearchIcon(true)}
            className={classes.search_main_searchMobile}
          ></div>
        )}
        {isMobile && <HeaderCart />}
        {isMobile && <BurgerMobile />}
      </div>
      {!isMobile && <RightNavMenu scroll={props.scroll} />}
    </div>
  );
};

export default Navbar;
