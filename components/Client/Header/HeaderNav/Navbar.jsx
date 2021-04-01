import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import SearchItemHeader from "../SearchItemHeader/SearchItemHeader";
import Burger from "./Burger";
import { Nav } from "./HeaderNavStyled";

const Navbar = (props) => {
  return (
    <Nav id="header_nav">
      <HeaderLogo scroll={props.scroll} />
      <SearchItemHeader />
      <Burger scroll={props.scroll} />
    </Nav>
  );
};

export default Navbar;
