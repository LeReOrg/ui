import React, { useEffect, useState } from "react";
import styles from "./ProfileContainerStyled";
import { getLayout as getSiteLayout } from "./MainLayout";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SideBarCustomer from "../components/Client/Customer/SideBarCustomer";
import CustomerMobile from "../components/Client/Customer/CustomerMobile";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const ProfileLayout = ({ children }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:768px)");

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
      {!isMobile ? (
        <Grid container spacing={4}>
          <Grid
            item
            lg={2}
            md={3}
            className={classes.main_customerProfileContent}
          >
            <SideBarCustomer />
          </Grid>

          <Grid item lg={10} md={9}>
            {children}
          </Grid>
        </Grid>
      ) : (
        <CustomerMobile />
      )}
    </div>
  );
};

export const getLayout = (page) =>
  getSiteLayout(<ProfileLayout>{page}</ProfileLayout>);
export default ProfileLayout;
