import React, { useState, useRef, useEffect } from "react";
import RightNavMenu from "./RightNavMenu";
import { useClickOutside } from "../../../../hooks/useOnClickOutSide";
import { StyledBurger } from "./HeaderNavStyled";

const Burger = (props) => {
  const [open, setIsOpen] = useState(false);
  const [mainLayout, setMainLayout] = useState("");
  const menuRef = useRef();
  useEffect(() => {
    let getMainLayout = document.getElementById("main-container");
    setMainLayout(getMainLayout);
  }, []);

  const showBurger = () => {
    var x = document.getElementsByClassName("bodyTag")[0];
    if (!open) {
      x.classList.add("noscrolldown");
      mainLayout.classList.add("disabled");
    } else {
      x.classList.remove("noscrolldown");
      mainLayout.classList.remove("disabled");
    }
    setIsOpen(!open);
  };
  const onClickOutSide = () => {
    var x = document.getElementsByClassName("bodyTag")[0];
    if (open) {
      setIsOpen(!open);
      x.classList.remove("noscrolldown");

      mainLayout.classList.remove("disabled");
    }
  };
  useClickOutside(menuRef, onClickOutSide);
  return (
    <div ref={menuRef}>
      <StyledBurger
        open={open}
        onClick={() => {
          showBurger();
        }}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavMenu scroll={props.scroll} open={open} />
    </div>
  );
};

export default Burger;
