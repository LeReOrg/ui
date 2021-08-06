import React, { useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import HeaderCart from "../HeaderCart/HeaderCart";
import ShowLogin from "../ShowLogin/ShowLogin";
import AccountList from "../AccountList/AccountList";
import { styles } from "./HeaderNavStyled";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../lib/recoil-root";

const RightNavMenu = ({ mobileMode }) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const [isHovering, setIsHovering] = useState(false);
  const user = useRecoilValue(userState);
  return (
    <div className={classes.right_nav_main}>
      <div className={classes.right_nav_content}>
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
          {user && <span className={classes.logoAccount}></span>}
          <a>
            {user && user
              ? user.displayName || user.user.displayName
              : "Tài khoản"}
          </a>
          {isHovering ? !user ? <ShowLogin /> : <AccountList /> : null}
        </li>
        <li>
          <Link href="/uploadproduct">
            <a className={classes.uploadproduct}>Đăng sản phẩm</a>
          </Link>
        </li>
      </div>
      {!mobileMode && <HeaderCart />}
    </div>
  );
};

export default RightNavMenu;
