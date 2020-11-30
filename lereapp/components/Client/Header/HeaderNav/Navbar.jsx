import React from "react";
import styled from "styled-components";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import SearchItemHeader from "../SearchItemHeader/SearchItemHeader";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  padding: 10px 80px 18px 80px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 599.95px) {
    padding: 18px 0 18px 20px;
  }
  @media (max-width:1024px) {
    padding: 15px;
    display : flex;
    align-items: center
  }
`;

const Navbar = (props) => {
  return (
    <Nav id="header_nav">
      <HeaderLogo scroll = {props.scroll} />
      <SearchItemHeader />
      <Burger scroll = {props.scroll}/>
    </Nav>
  );
};

export default Navbar;
