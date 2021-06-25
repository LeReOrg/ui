import React from "react";
import { slide as Menu } from "react-burger-menu";
import RightNavMenu from "./RightNavMenu";
const BurgerMobile = (props) => {
  return (
    <Menu pageWrapId={"container-fluid"} right outerContainerId={"__next"}>
      <RightNavMenu mobileMode />
    </Menu>
  );
};
export default BurgerMobile;
