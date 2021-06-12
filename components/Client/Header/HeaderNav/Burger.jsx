import React, { useState, useRef, useEffect } from "react";
import RightNavMenu from "./RightNavMenu";
import { disabledMainLayout } from "../../../../utils/helper";
import { useMediaQuery } from "react-responsive";
import BurgerMobile from "./BurgerMobile";
const Burger = (props) => {
  const [open, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <div>
      {isMobile && (
        <BurgerMobile open={open} openBurger={() => setIsOpen(!open)} />
      )}
      <RightNavMenu scroll={props.scroll} open={open} />
    </div>
  );
};

export default Burger;
