import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CustomerStyled";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AvartCartMobile from "../../../assets/userMobile.png";
import { Typography, Box } from "@material-ui/core";
import CustomerInfo from "./CustomerInfo";
import CustomerHistory from "./CustomerHistory";
const CustomerMobile = (props) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [detailCusMobile, setDetailCusMobile] = useState(false);
  const [page, setPage] = useState(1);

  const goToDetailCusMobile = (pages) => {
    setDetailCusMobile(true);
    if (pages !== 1) {
      setPage(2);
    }
  };
  return (
    <div className={classes.main_customerProfileMobile}>
      {!detailCusMobile ? (
        <>
          <div className={classes.main_customerProfileAvatarMobile}>
            <Image src={AvartCartMobile} height="88px" width="88px" />
            <Box pt={2}>
              <Typography variant="h4"> Luu Duc Hoa</Typography>
            </Box>
          </div>
          <div className={classes.main_customerProfileActionMobile}>
            <Box component="div" className={classes.customerInfo}>
              <Box component="div" display="flex" alignItems="center">
                <div className={classes.customerInfo_imageHistory}></div>
                <div
                  onClick={() => {
                    goToDetailCusMobile(1);
                  }}
                >
                  Lịch sử đơn hàng
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
                    goToDetailCusMobile(2);
                  }}
                >
                  Thông tin tài khoản
                </div>
              </Box>
            </Box>
          </div>
        </>
      ) : page === 1 ? (
        <CustomerHistory isMobile={true} />
      ) : (
        <CustomerInfo />
      )}
    </div>
  );
};

export default CustomerMobile;
