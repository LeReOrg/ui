import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CustomerMobileStyled";
import { makeStyles } from "@material-ui/core/styles";
import AvartCartMobile from "../../../assets/userMobile.png";
import { Typography, Box } from "@material-ui/core";
import Link from "next/link";
import { userState } from "../../../lib/recoil-root";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import defaultAvatar from "../../../assets/icon.png";

const CustomerMobile = (props) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const router = useRouter();
  console.log(currentUser);
  return (
    <div className={classes.main_customerProfileMobile}>
      <div className={classes.main_customerProfileAvatarMobile}>
        <Image
          src={currentUser?.user?.avatar || defaultAvatar}
          height="88px"
          width="88px"
        />
        <Box pt={2}>
          <Typography variant="h4">{currentUser?.user?.displayName}</Typography>
        </Box>
      </div>
      <div className={classes.main_customerProfileActionMobile}>
        <Box component="div" className={classes.customerInfo}>
          <Box component="div" display="flex" alignItems="center">
            <div className={classes.customerInfo_imageHistory}></div>
            <div
              onClick={() => {
                router.push("/account/customer/purchase");
              }}
            >
              Quản lý đơn hàng
            </div>
          </Box>
          <hr
            style={{
              background: "rgba(0, 0, 0, 0.09)",
              height: 1,
              width: "100%",
              marginTop: 18,
              marginBottom: 18,
            }}
          />
          <Box component="div" display="flex" alignItems="center">
            <div className={classes.customerInfo_imageCustomerDetail}></div>
            <div
              className={classes.customerInfo_textCustomerDetailInActive}
              onClick={() => {
                router.push("/account/customer/profile");
              }}
            >
              Thông tin tài khoản
            </div>
          </Box>
          <hr
            style={{
              background: "rgba(0, 0, 0, 0.09)",
              height: 1,
              width: "100%",
              marginTop: 18,
              marginBottom: 18,
            }}
          />
          {currentUser?.user?.isHirer && (
            <>
              <Box
                className={classes.sideBarItem}
                component="div"
                display="flex"
                alignItems="center"
                mb={4}
              >
                <div className={classes.customerInfo_imageIcon}></div>
                <div
                  onClick={() => {
                    router.push("/account/lease/order");
                  }}
                >
                  Quản lý cho thuê
                </div>
              </Box>
              <hr
                style={{
                  background: "rgba(0, 0, 0, 0.09)",
                  height: 1,
                  width: "100%",
                  marginTop: 18,
                  marginBottom: 18,
                }}
              />

              <Box
                className={classes.sideBarItem}
                component="div"
                display="flex"
                alignItems="center"
                mb={4}
              >
                <div className={classes.customerInfo_imageIcon}></div>
                <div
                  onClick={() => {
                    router.push("/account/lease/summary");
                  }}
                >
                  Quản lý doanh thu
                </div>
              </Box>
              <hr
                style={{
                  background: "rgba(0, 0, 0, 0.09)",
                  height: 1,
                  width: "100%",
                  marginTop: 18,
                  marginBottom: 18,
                }}
              />
              <Box
                className={classes.sideBarItem}
                component="div"
                display="flex"
                alignItems="center"
                mb={4}
              >
                <div className={classes.customerInfo_imageIcon}></div>
                <div
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
      </div>
    </div>
  );
};

export default CustomerMobile;
