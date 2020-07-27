import React from "react";
import styled from "styled-components";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  padding: 10px 80px 18px 80px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 599.95px) {
    
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
