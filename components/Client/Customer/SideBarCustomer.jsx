import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { MyButton } from "../Login/LoginPageStyled";
import HireTabs from "../HireTabs/HireTabs";
import { useRecoilState } from "recoil";
import { userState } from "../../../lib/recoil-root";
import { useRouter } from "next/router";
import { useUpdateUser } from "../../../hooks/useUser";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./CustomerStyled";

const SideBarCustomer = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  const router = useRouter();
  console.log(router);
  const { mutate, isLoading } = useUpdateUser();

  // switch (router) {
  //   case value:
  //     break;

  //   default:
  //     break;
  // }
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
        <Box component="div" display="flex" alignItems="center" mb={4}>
          <div className={classes.customerInfo_imageCustomerDetail}></div>
          <div
            className={classes.customerInfo_textCustomerDetailInActive}
            onClick={() => {
              setHistoryCart(false);
            }}
          >
            Thông tin tài khoản
          </div>
        </Box>
        <Box component="div" display="flex" alignItems="center" mb={4}>
          <div className={classes.customerInfo_imageHistory}></div>
          <div
            className={classes.customerInfo_textHistoryActive}
            onClick={() => {
              setHistoryCart(true);
            }}
          >
            Lịch sử đơn hàng
          </div>
        </Box>

        {currentUser?.user?.isHirer && <HireTabs />}
      </Box>

      {currentUser?.user?.isHirer ? (
        <Box component="div" className={classes.customerInfoButton}>
          <MyButton>Đăng sản phẩm</MyButton>
        </Box>
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
