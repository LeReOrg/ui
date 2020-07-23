import React from "react";
import styled from "styled-components";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 20px 80px 0 20px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  @media (max-width: 599.95px) {
    height: 60px;
  }
`;
const Navbar = (props) => {
  return (
    <Nav id="header_nav">
      <HeaderLogo scroll = {props.scroll} />
      <Burger scroll = {props.scroll}/>
    </Nav>
  );
};

export default Navbar;
