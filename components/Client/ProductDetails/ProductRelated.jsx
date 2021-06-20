import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CardProductRelated from "../../../utils/CardProductRelated";
import styles from "./ProductDetailsStyled";
import { useProductByCategory } from "../../../hooks/useProductByCategory";

const ProductRelated = ({ detailsProduct }) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const [test, setTest] = useState(false);
  const { data: relatedItem, isLoading, isSuccess } = useProductByCategory(
    detailsProduct?.category?._id
  );
  const renderRelatedItem = () =>
    relatedItem?.map((item, index) => (
      <Grid item lg={3} xs={6}>
        <CardProductRelated item={item} itemByType={true} />
      </Grid>
    ));
  return (
    <div className={classes.main_list}>
      <Typography className={classes.title} align="left">
        Sản phẩm tương tự
      </Typography>
      <div className={classes.main_list_related}>
        <Grid container spacing={2}>
          {renderRelatedItem()}
        </Grid>
      </div>
    </div>
  );
};

export default ProductRelated;
