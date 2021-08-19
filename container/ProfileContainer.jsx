import React, { useEffect, useState } from "react";
import styles from "./ProfileContainerStyled";
import { getLayout as getSiteLayout } from "./MainLayout";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SideBarCustomer from "../components/Client/Customer/SideBarCustomer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useRouter } from "next/router";

const ProfileLayout = ({ children }) => {
  const useStyles = makeStyles(styles);
  const router = useRouter();
  const classes = useStyles();
  const [titlePage, setTitlePage] = useState();
  useEffect(() => {
    switch (router.pathname) {
      case "/account/customer/profile":
        setTitlePage("Thông tin tài khoản");
        break;
      case "/account/customer/purchase":
        setTitlePage("Lịch sử đơn hàng");
        break;
      case "/account/lease/order":
        setTitlePage("Quản lý cho thuê");
        break;
      case "/account/lease/summary":
        setTitlePage("Thống kê doanh thu");
        break;
      case "/account/lease/product":
        setTitlePage("Quản lý sản phẩm");
        break;
      case "/account/customer/view/[index]":
        setTitlePage("Chi tiết đơn hàng");
        break;
      default:
        break;
    }
  }, [router]);
  const isMobile = useMediaQuery("(max-width:767px)");
  useEffect(() => {
    let background = document.getElementById("container-fluid");
    if (!isMobile) {
      background.classList.add("customerPage");
    } else {
      background.classList.remove("customerPage");
    }
    return () => {
      background.classList.remove("customerPage");
    };
  }, [isMobile]);
  return (
    <div className={classes.main_customerProfile}>
      <Grid container spacing={4}>
        {!isMobile && (
          <Grid
            item
            xl={3}
            lg={3}
            md={4}
            className={classes.main_customerProfileContent}
          >
            <SideBarCustomer />
          </Grid>
        )}
        <Grid item xl={9} lg={9} md={8}>
          <Box display="flex" justifyContent="space-between">
            <h1 className={classes.customerTiltlePage}>{titlePage}</h1>
            {router.pathname === "/account/customer/view/[index]" && (
              <div className={classes.backButton} onClick={() => router.back()}>
                <div className={classes.backButtonIcon}></div>
                Lịch sử đơn hàng
              </div>
            )}
          </Box>

          <Box className={classes.customerProcessInfo}>{children}</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export const getLayout = (page) =>
  getSiteLayout(<ProfileLayout>{page}</ProfileLayout>);
export default ProfileLayout;
