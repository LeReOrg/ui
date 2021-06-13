import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from "./UploadProductStyled";
import CustomForm from "../../../utils/CustomForm.js";

const UploadPrice = (props) => {
  const useStyled = makeStyles(styles);
  const [discountList, setDiscountList] = useState([""]);
  console.log(discountList);
  const classes = useStyled();
  // <CustomForm
  //   inputType="number"
  //   className={classes.inputTagPrice}
  //   name={props.name}
  //   nameInput="price_product"
  //   placeholder="Nhập giá thuê sản phẩm"
  // />;
  // const addMoreDiscount = () => {
  //   discountList;
  // }
  const renderDisCountItem = () =>
    discountList.map((item) => (
      <Box display="flex">
        <CustomForm
          inputType="input"
          className={classes.inputTagPrice}
          name={props.name}
          nameInput="price_product"
          placeholder="Nhập giá thuê sản phẩm"
        />
        <CustomForm
          inputType="input"
          className={classes.inputTagPrice}
          name={props.name}
          nameInput="price_product"
          placeholder="Nhập giá thuê sản phẩm"
        />
      </Box>
    ));
  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={4} md={4} xs={12}>
          <Box className={classes.rowInfo}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <p className={classes.titleText}>Nhập giá thuê:</p>
              <p className={classes.titleNumberText}>VNĐ/Ngày</p>
            </Box>

            <div className={classes.titleTextInput}>
              <CustomForm
                inputType="number"
                className={classes.inputTagPrice}
                name={props.name}
                nameInput="price_product"
                placeholder="Nhập giá thuê sản phẩm"
              />
            </div>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <Box className={classes.rowInfo}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <p className={classes.titleText}>Yêu cầu đặt cọc:</p>
              <p className={classes.titleNumberText}>VNĐ</p>
            </Box>

            <div className={classes.titleTextInput}>
              <CustomForm
                inputType="number"
                className={classes.inputTagPrice}
                name={props.name}
                nameInput="pile_price"
                placeholder="Nhập giá cọc sản phẩm"
              />
            </div>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <Box className={classes.rowInfo}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <p className={classes.titleText}>Min Date:</p>
              <p className={classes.titleNumberText}>Ngày</p>
            </Box>

            <div className={classes.titleTextInput}>
              <CustomForm
                inputType="number"
                className={classes.inputTagPrice}
                name={props.name}
                nameInput="min_date"
                placeholder="Số ngày tối thiểu"
              />
            </div>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.discountPrice}>
        <p className={classes.titleText}>Giảm giá thuê:</p>
      </Box>
      <Grid container spacing={2} className={classes.discountContainer}>
        <Grid item lg={5} md={5}>
          <Box>
            <Box display="flex">
              <Grid container>
                <Grid item lg={6} md={6}>
                  <div className={classes.titleSubDiscount}>Tổng ngày thuê</div>
                </Grid>
                <Grid item lg={6} md={6}>
                  <div className={classes.titleSubDiscount}>% Giảm giá</div>
                </Grid>
              </Grid>
            </Box>
            <Box>{renderDisCountItem()}</Box>
          </Box>
        </Grid>
        <Grid item lg={2} md={2}>
          <Box
            className={classes.addDiscountItem}
            onClick={() => setDiscountList(["", ...discountList])}
          >
            Thêm vào
          </Box>
        </Grid>
        <Grid item lg={5} md={5}>
          <p>Bạn không có giảm giá nào</p>
        </Grid>
      </Grid>
    </>
  );
};

export default UploadPrice;
