import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styles from "./HireTabsStyled";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userState } from "../../../lib/recoil-root";
const HireTabs = () => {
  const useStyles = makeStyles(styles);
  const router = useRouter();
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  return (
    <>
      <Box component="div" display="flex" alignItems="center" mb={4}>
        <div className={classes.customerInfo_imageCustomerDetail}></div>
        <div
          className={classes.customerInfo_textHistoryActive}
          onClick={() => {
            setHistoryCart(true);
          }}
        >
          Quản lý cho thuê
        </div>
      </Box>
      <Box component="div" display="flex" alignItems="center" mb={4}>
        <div className={classes.customerInfo_imageCustomerDetail}></div>
        <div
          className={classes.customerInfo_textHistoryActive}
          onClick={() => {
            setHistoryCart(true);
          }}
        >
          Quản lý doanh thu
        </div>
      </Box>
      <Box component="div" display="flex" alignItems="center" mb={4}>
        <div className={classes.customerInfo_imageCustomerDetail}></div>
        <div
          className={classes.customerInfo_textHistoryActive}
          onClick={() => {
            setHistoryCart(true);
          }}
        >
          Quản lý sản phẩm
        </div>
      </Box>
    </>
  );
};

export default HireTabs;
