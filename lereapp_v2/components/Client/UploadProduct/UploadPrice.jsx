import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from "./UploadProductStyled";
import CustomForm from "../../../utils/CustomForm.js";

const UploadPrice = (props) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  return (
    <>
      <Box mb={4} className={classes.rowInfo}>
        <p className={classes.titleText}>Nhập giá thuê</p>
        <div className={classes.titleTextInput}>
          <CustomForm
            inputType="input"
            className={classes.inputTagPrice}
            name={props.name}
            nameInput="price_product"
            placeholder="Nhập giá sản phẩm"
          />
          <span className={classes.informationCurrency}> đồng/ngày</span>
        </div>
      </Box>

      <Box mb={4} className={classes.rowInfo}>
        <p className={classes.titleText}>Giá cọc (tùy chọn)</p>
        <div className={classes.titleTextInput}>
          <CustomForm
            inputType="input"
            className={classes.inputTagPrice}
            name={props.name}
            nameInput="pile_price"
            placeholder="Nhập giá cọc sản phẩm"
          />
          <span className={classes.informationCurrency}> đồng</span>
        </div>
      </Box>
    </>
  );
};

export default UploadPrice;
