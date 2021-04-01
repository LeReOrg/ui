import React from "react";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import styles from "../ShowLogin/ShowLoginStyled";
import { logOut } from "../../../../firebase/firenase.utils";
const AccountList = ({user}) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  return (
    <div className={classes.mainShow}>
      <div className={classes.mainShowBody}>
        <Link href="/signup">
          <div className={classes.registerContentButton}>
            <Link href={{pathname : `/account/customer/${user.uid}`,query :{name : `${user.displayName}`} }}  >
              <a className={classes.registerButton}>Tài khoản của tôi</a>
            </Link>
          </div>
        </Link>
        <Link href="/login">
          <div className={classes.loginContentButton}>
            <a className={classes.loginButton} onClick={logOut}>
              Dăng xuất
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default AccountList;
