import React from "react";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";

const ShowLogin = () => {
  const useStyled = makeStyles((theme) => ({
    mainShow: {
      position: "absolute",
      top: 20,
      zIndex: 10,
      width: 200,
      height: 100,
      background: "#FFFFFF",
      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16)",
      borderRadius: 8,
    },
    mainShowBody: {
      paddingTop: 20,
      paddingLeft: 16,
      paddingBottom: 20,
      display: "flex",
      flexDirection: "column",
    },
  }));
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
