import React, { useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import HeaderCart from "../HeaderCart/HeaderCart";
import ShowLogin from "../ShowLogin/ShowLogin";
import AccountList from "../AccountList/AccountList";
import { styles } from "./HeaderNavStyled";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../lib/recoil-root";
import CloseIcon from "@material-ui/icons/Close";
import { useMediaQuery } from "react-responsive";
import { auth, logOut } from "../../../../firebase/firenase.utils";

const RightNavMenu = ({ updateOpen }) => {
  const useStyled = makeStyles(styles);
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const classes = useStyled();
  const [isHovering, setIsHovering] = useState(false);
  const user = useRecoilValue(userState);
  const logOutFuntion = (event) => {
    event.preventDefault();
    auth.signOut().then(() => {
      setCurrentUser("");
      router.push("/");
    });
  };
  return (
    <div className={classes.right_nav_main}>
      <div className={classes.closeIconMenu} onClick={() => updateOpen()}>
        {isMobile && <CloseIcon />}
      </div>

      <div className={classes.right_nav_content}>
        <li>
          <Link href="/about">
            <a>Về chúng tôi</a>
          </Link>
        </li>
        {!isMobile ? (
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
        ) : (
          <>
            {!user ? (
              <>
                <li>
                  <Link href="/signup">
                    <div className={classes.registerContentButton}>
                      <a className={classes.registerButton}>Đăng ký</a>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <div className={classes.loginContentButton}>
                      <a className={classes.loginButton}>Đăng nhập</a>
                    </div>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href={{
                      pathname: "/account/customer/profile",
                    }}
                  >
                    <div className={classes.registerButton}>
                      Tài khoản của tôi
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: `/account/customer/purchase`,
                    }}
                  >
                    <div className={classes.registerButton}>
                      Đơn hàng của tôi
                    </div>
                  </Link>
                </li>

                {user?.user?.isHirer && (
                  <>
                    <li>
                      <Link
                        href={{
                          pathname: `/account/lease/order`,
                        }}
                      >
                        <div className={classes.registerButton}>
                          Quản lý cho thuê
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={{
                          pathname: `/account/lease/summary`,
                        }}
                      >
                        <div className={classes.registerButton}>
                          Thống kê doanh thu
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={{
                          pathname: `/account/lease/product`,
                        }}
                      >
                        <div className={classes.registerButton}>
                          Quản lý sản phẩm
                        </div>
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <div
                    className={classes.loginButton}
                    onClick={(event) => logOutFuntion(event)}
                  >
                    Đăng xuất
                  </div>
                </li>
              </>
            )}
          </>
        )}

        <li>
          <Link href="/uploadproduct">
            <a className={classes.uploadproduct}>Đăng sản phẩm</a>
          </Link>
        </li>
      </div>
      {!isMobile && <HeaderCart />}
    </div>
  );
};

export default RightNavMenu;
