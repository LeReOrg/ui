import React from "react";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import styles from "../ShowLogin/ShowLoginStyled";

const AccountList = () => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  return (
    <div className={classes.mainShow}>
      <div className={classes.mainShowBody}>
        <Link href="/signup">
          <div className={classes.registerContentButton}>
            <a className={classes.registerButton}>Đăng dddsdsd</a>
          </div>
        </Link>
        <Link href="/login">
          <div className={classes.loginContentButton}>
            <a className={classes.loginButton}>Đăng nhập</a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AccountList;
