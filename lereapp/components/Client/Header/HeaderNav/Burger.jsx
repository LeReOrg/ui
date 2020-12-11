import React, { useState } from "react";
import styled from "styled-components";
import RightNavMenu from "./RightNavMenu";
import onClickOutside from "react-onclickoutside";

const StyledBurger = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: fixed;
  right: 15px;
  z-index: 4;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 25px;
  }
  @media (max-width: 500px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 15px;
  }
  div {
    height: 0.25rem;
    border-radius: 5px;
    background-color: black;
    transform-origin: 1px;
    transition: all 0.2s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = (props) => {
  const [open, setIsOpen] = useState(false);
  let getMainLayout = document.getElementById("main-container");
  const showBurger = () => {
    !open
      ? getMainLayout.classList.add("disabled")
      : getMainLayout.classList.remove("disabled");
    setIsOpen(!open);
  };
   !open
     ? (Burger.handleClickOutside = () => {
       if (getMainLayout) getMainLayout.classList.remove("disabled");
         setIsOpen(false);
       })
     : null;

  return (
    <>
      <StyledBurger open={open} onClick={showBurger}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavMenu scroll={props.scroll} open={open} />
    </>
  );
};
const clickOutsideConfig = {
  handleClickOutside: () => Burger.handleClickOutside,
};
export default onClickOutside(Burger, clickOutsideConfig);
