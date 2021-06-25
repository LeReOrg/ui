import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import SearchItemHeader from "../SearchItemHeader/SearchItemHeader";
import { Nav } from "./HeaderNavStyled";
import { useMediaQuery } from "react-responsive";
import RightNavMenu from "./RightNavMenu";
import HeaderCart from "../HeaderCart/HeaderCart";

const Navbar = (props) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <Nav id="header_nav">
      <HeaderLogo scroll={props.scroll} />
      <SearchItemHeader />
      {isMobile && <HeaderCart />}
      {!isMobile && <RightNavMenu scroll={props.scroll} />}
    </Nav>
  );
};

export default Navbar;
