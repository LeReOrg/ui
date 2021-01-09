import React from "react";
import { Field, ErrorMessage } from "formik";
import { Box, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from "./UploadProductStyled";

const UploadPrice = (props) => {
  const useStyled = makeStyles(styles);
  const customCurrency = (event) => {
    let valuePrice = event.target.value;
    valuePrice = valuePrice.replace(/,/g, "");
    valuePrice = valuePrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    props.setFieldValue("price_product", valuePrice);
  };
  const classes = useStyled();
  return (
    <>
      <Box mb={4} className={classes.rowInfo}>
        <p className={classes.titleText}>Giá sản phẩm</p>
        <Field
          type="number"
          className={classes.inputTagPrice}
          name="price_product"
          placeholder="Nhập giá sản phẩm"
          onChange={customCurrency}
        />
        <span className={classes.informationCurrency}>đồng/ngày</span>
        {/* <ErrorMessage name="fullName" /> */}
      </Box>

      <Box mb={4} className={classes.rowInfo}>
        <p>Giá cọc (tùy chọn)</p>
        <Field
          type="number"
          className={classes.inputTagPrice}
          name="pile_price"
          placeholder="Nhập giá cọc sản phẩm"
          onChange={customCurrency}
        />
        {props.errors.price_product ? (
          <div>{props.errors.price_product}</div>
        ) : null}

        <span className={classes.informationCurrency}>đồng</span>
        {/* <ErrorMessage name="fullName" /> */}
      </Box>
    </>
  );
};

export default UploadPrice;
