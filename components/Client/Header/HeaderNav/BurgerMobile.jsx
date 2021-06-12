import React, { useRef } from "react";
import { StyledBurger } from "./HeaderNavStyled";
import { disabledMainLayout } from "../../../../utils/helper";
import { useClickOutside } from "../../../../hooks/useOnClickOutSide";

const BurgerMobile = ({ open, openBurger }) => {
  const menuRef = useRef();
  const showBurger = () => {
    disabledMainLayout(open);
    openBurger();
  };
  const onClickOutSide = () => {
    disabledMainLayout(open);
    openBurger();
  };
  useClickOutside(menuRef, onClickOutSide);
  return (
    <StyledBurger
      ref={menuRef}
      open={open}
      onClick={() => {
        showBurger();
      }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
export default BurgerMobile;
