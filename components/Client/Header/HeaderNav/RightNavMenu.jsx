import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import HeaderCart from "../HeaderCart/HeaderCart";
import ShowLogin from "../ShowLogin/ShowLogin";
import AccountList from "../AccountList/AccountList";

import { useState } from "react";
import { RightNav, styles } from "./HeaderNavStyled";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../lib/recoil-root";

const RightNavMenu = ({ ...props }) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const [isHovering, setIsHovering] = useState(false);
  const { user } = useRecoilValue(userState);
  return (
    <div className={classes.right_nav_main}>
      <RightNav open={props.open}>
        <li>
          <Link href="/about">
            <a>Về chúng tôi</a>
          </Link>
        </li>
        <li
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={classes.showLogin}
        >
          {user && <div className={classes.logoAccount}></div>}
          <a>{user ? user.displayName : "Tài khoản"}</a>
          {isHovering ? (
            !user ? (
              <ShowLogin />
            ) : (
              <AccountList user={user} />
            )
          ) : null}
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
