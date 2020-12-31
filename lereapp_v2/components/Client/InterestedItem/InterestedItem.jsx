import React from "react";
import { makeStyles, Box, Typography, Grid } from "@material-ui/core";
import CardProduct from "../../../utils/CardProduct";
import styles from "./InterestedItemStyled";
import { useTopProducts } from "../../../hooks/useTopProduct";

const useStyles = makeStyles(styles);
const InterestedItem = (props) => {
  const { data: topProducts, isLoading, error } = useTopProducts();
  const renderTopItems = topProducts?.map((items, index) => (
    <Grid item key={index} lg={3} md={4} xs={6}>
      <CardProduct item={items} />
    </Grid>
  ));
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
