import React, { useEffect, useState } from "react";
import styles from "./CustomerStyled";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CustomerMobile from "./CustomerMobile";
import SideBarCustomer from "./SideBarCustomer";
import CustomerHistory from "./CustomerHistory";
import CustomerInfo from "./CustomerInfo";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

const CustomerPage = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");
  const [historyCart, setHistoryCart] = useState(true);

  useEffect(() => {
    let background = document.getElementById("container-fluid");
    if (!matches) {
      background.classList.add("customerPage");
    } else {
      background.classList.remove("customerPage");
    }
  }, [matches]);
  useEffect(() => {
    let background = document.getElementById("container-fluid");

    return () => {
      background.classList.remove("customerPage");
    };
  }, []);
  return (
    <div className={classes.main_customerProfile}>
      {!matches ? (
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
            <Box className={classes.customerProcessInfo}>
              {historyCart ? (
                <CustomerHistory isMobile={false} />
              ) : (
                <CustomerInfo />
              )}
            </Box>
          </Grid>
        </Grid>
      ) : (
        <CustomerMobile />
      )}
    </div>
  );
};

export default CustomerPage;
