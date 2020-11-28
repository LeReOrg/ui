import React, { useEffect, useState } from "react";
import { makeStyles, Box, Typography, Grid } from "@material-ui/core";
import CardProduct from "../../../utils/CardProduct";
import { useSelector, useDispatch } from "react-redux";
import { getTopProduct } from "../../../store/action/products_action";

const useStyles = makeStyles((theme) => ({
  interested_main: {
    marginTop: 64,
    width: "90%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
    },
  },
  interested_title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
}));
const InterestedItem = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopProduct());
  }, []);
  const topProductItemsSelect = useSelector((state) => state.products.products);
  let renderTopItems = [];
  if (topProductItemsSelect.length > 0) {
    renderTopItems = topProductItemsSelect.map((items, index) => (
      <Grid item key={index} lg={3} xs={6}>
        <CardProduct item={items} />
      </Grid>
    ));
  }
  const classes = useStyles();
  return (
    <div className={classes.interested_main}>
      <Typography component="div">
        <Box className={classes.interested_title}>Có thể bạn quan tâm</Box>
        <Grid container spacing={3}>
          {renderTopItems}
        </Grid>
      </Typography>
    </div>
  );
};

export default InterestedItem;
