import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { MyButton } from "../Login/LoginPageStyled";
import { useRecoilState } from "recoil";
import { userState } from "../../../lib/recoil-root";
import { useRouter } from "next/router";
import { useUpdateUser } from "../../../hooks/useUser";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./CustomerStyled";
import Link from "next/link";

const SideBarCustomer = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [tabActive, setTabActive] = useState(0);
  const router = useRouter();
  const { mutate, isLoading } = useUpdateUser();
  useEffect(() => {
    switch (router.pathname) {
      case "/account/customer/profile":
        setTabActive(1);
        break;
      case "/account/customer/purchase":
        setTabActive(2);
        break;
      case "/account/lease/order":
        setTabActive(3);

        break;
      case "/account/lease/summary":
        setTabActive(4);

        break;
      case "/account/lease/product":
        setTabActive(5);

        break;

      default:
        break;
    }
    return () => {
      setTabActive(0);
    };
  }, [router]);

  const registerHired = async () => {
    const updateHire = { isHirer: true, token: currentUser.token };
    try {
      mutate(updateHire);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box component="div" className={classes.customerInfo}>
        <Box component="div" className={classes.customerInfoImage}>
          <img
            src={currentUser?.user?.avatar}
            className={classes.customerImage}
          />
        </Box>
        <p className={classes.customerInfo_title}>{router?.query.name}</p>
        <hr
          style={{
            background: "rgba(0, 0, 0, 0.09)",
            height: 1,
            width: "100%",
            marginTop: 10,
            marginBottom: 32,
          }}
        />
        <Box
          className={classes.sideBarItem}
          component="div"
          display="flex"
          alignItems="center"
          mb={4}
        >
          <div
            className={`${
              tabActive === 1
                ? classes.customerInfo_imageCustomerDetailActive
                : classes.customerInfo_imageCustomerDetail
            }`}
          ></div>
          <div
            className={`${tabActive === 1 ? "active" : ""}`}
            onClick={() => {
              router.push("/account/customer/profile");
            }}
          >
            Thông tin tài khoản
          </div>
        </Box>
        <Box
          className={classes.sideBarItem}
          component="div"
          display="flex"
          alignItems="center"
          mb={4}
        >
          <div
            className={`${
              tabActive === 2
                ? classes.customerInfo_imageHistoryActive
                : classes.customerInfo_imageHistory
            }`}
          ></div>
          <div
            className={`${tabActive === 2 ? "active" : ""}`}
            onClick={() => {
              router.push("/account/customer/purchase");
            }}
          >
            Quản lý đơn hàng
          </div>
        </Box>

        {currentUser?.user?.isHirer && (
          <>
            <Box
              className={classes.sideBarItem}
              component="div"
              display="flex"
              alignItems="center"
              mb={4}
            >
              <div
                className={`${
                  tabActive === 3
                    ? classes.customerInfo_imageIconActive
                    : classes.customerInfo_imageIcon
                }`}
              ></div>
              <div
                className={`${tabActive === 3 ? "active" : ""}`}
                onClick={() => {
                  router.push("/account/lease/order");
                }}
              >
                Quản lý cho thuê
              </div>
            </Box>
            <Box
              className={classes.sideBarItem}
              component="div"
              display="flex"
              alignItems="center"
              mb={4}
            >
              <div
                className={`${
                  tabActive === 4
                    ? classes.customerInfo_imageIconActive
                    : classes.customerInfo_imageIcon
                }`}
              ></div>
              <div
                className={`${tabActive === 4 ? "active" : ""}`}
                onClick={() => {
                  router.push("/account/lease/summary");
                }}
              >
                Quản lý doanh thu
              </div>
            </Box>
            <Box
              className={classes.sideBarItem}
              component="div"
              display="flex"
              alignItems="center"
              mb={4}
            >
              <div
                className={`${
                  tabActive === 5
                    ? classes.customerInfo_imageIconActive
                    : classes.customerInfo_imageIcon
                }`}
              ></div>
              <div
                className={`${tabActive === 5 ? "active" : ""}`}
                onClick={() => {
                  router.push("/account/lease/product");
                }}
              >
                Quản lý sản phẩm
              </div>
            </Box>
          </>
        )}
      </Box>

      {currentUser?.user?.isHirer ? (
        <Link href="/uploadproduct">
          <a>
            <Box component="div" className={classes.customerInfoButton}>
              <MyButton>Đăng sản phẩm</MyButton>
            </Box>
          </a>
        </Link>
      ) : (
        <Box
          component="div"
          className={classes.customerInfoButton}
          onClick={() => registerHired()}
        >
          <MyButton>Đăng ký cho thuê</MyButton>
        </Box>
      )}
    </>
  );
};
export default SideBarCustomer;
