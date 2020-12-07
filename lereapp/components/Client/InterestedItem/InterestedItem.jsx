import React, { useEffect, useState } from "react";
import { makeStyles, Box, Typography, Grid } from "@material-ui/core";
import CardProduct from "../../../utils/CardProduct";
import { useSelector, useDispatch } from "react-redux";
import { getTopProduct } from "../../../store/action/products_action";
import styles from "./InterestedItemStyled";

const useStyles = makeStyles(styles);
const InterestedItem = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopProduct());
  }, []);
  const topProductItemsSelect = useSelector((state) => state.products.products);
  let renderTopItems = [];
  if (topProductItemsSelect.length > 0) {
    renderTopItems = topProductItemsSelect.map((items, index) => (
      <Grid item key={index} lg={3} md={4} xs={6}>
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
