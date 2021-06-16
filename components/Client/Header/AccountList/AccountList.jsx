import React from "react";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import styles from "../ShowLogin/ShowLoginStyled";
import { auth, logOut } from "../../../../firebase/firenase.utils";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { userState } from "../../../../lib/recoil-root";
const AccountList = ({ user }) => {
  const useStyled = makeStyles(styles);
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const router = useRouter();
  const logOutFuntion = (event) => {
    event.preventDefault();
    auth.signOut().then(() => {
      setCurrentUser("");
      router.push("/");
    });
  };
  const classes = useStyled();
  return (
    <div className={classes.mainShow}>
      <div className={classes.mainShowBody}>
        <div className={classes.registerContentButton}>
          <Link
            href={{
              pathname: `/account/customer/${user?.uid}`,
              query: { name: `${user?.displayName}` },
            }}
          >
            <div className={classes.registerButton}>Tài khoản của tôi</div>
          </Link>
        </div>
        <div className={classes.loginContentButton}>
          <div
            className={classes.loginButton}
            onClick={(event) => logOutFuntion(event)}
          >
            Đăng xuất
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountList;
