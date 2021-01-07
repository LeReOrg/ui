import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import HeaderCart from "../HeaderCart/HeaderCart";
import ShowLogin from "../ShowLogin/ShowLogin";
import { useState } from "react";
import { RightNav,styles } from "./HeaderNavStyled";

const RightNavMenu = ({ ...props }) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className={classes.right_nav_main}>
      <RightNav open={props.open}>
        <li>
          <Link href="/contact">
            <a>Về chúng tôi</a>
          </Link>
        </li>
        <li
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={classes.showLogin}
        >
          <a>Tài khoản</a>
          {isHovering && <ShowLogin />}
        </li>
        <li>
          <Link href="/uploadproduct">
            <a className={classes.uploadproduct}>Đăng sản phẩm</a>
          </Link>
        </li>
      </RightNav>
      <HeaderCart />
    </div>
  );
};

export default RightNavMenu;
