import React from "react";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import styles from "./ShowLoginStyled";

const ShowLogin = () => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  return (
    <div className={classes.mainShow}>
      <div className={classes.mainShowBody}>
        <Link href="/signup">
          <a>Đăng ký</a>
        </Link>
        <Link href="/login">
          <a>Đăng nhập</a>
        </Link>
      </div>
    </div>
  );
};

export default ShowLogin;
