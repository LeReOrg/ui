import React from "react";
import ShippingInfo from "../components/Client/Shipping/ShippingInfo";
import RecipentItems from "../components/Client/Shipping/RecipentItems";
import PaymentInfo from "../components/Client/Shipping/PaymentInfo";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

const Shipping = () => {
  const useStyled = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    main_shipping: {
      margin: "30px 80px",
    },
    main_shipping__content: {},
    main_shipping__contentLeft: {
      border: "1px solid #C3C7C5",
      borderRadius: 8,
    },
    main_shipping__contentRight: {
      border: "1px solid #C3C7C5",
      borderRadius: 8,
    },
  }));
  const classes = useStyled();
  return (
    <div className={classes.main_shipping}>
      <Grid container spacing={3}>
        <Grid item lg={8} md={7} xs={12}>
          <Box>
            <Box className={classes.main_shipping__contentLeft}>
              <ShippingInfo />
            </Box>

            <PaymentInfo />
          </Box>
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <Box className={classes.main_shipping__contentRight}>
            <RecipentItems />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Shipping;
