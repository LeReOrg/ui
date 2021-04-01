import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from "./ShippingStyled";
import CustomForm from "../../../utils/CustomForm.js";

const ShippingInfo = (props) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  return (
    <>
      <Box mb={2}>
        <p className={classes.titleText}>Họ và tên</p>
        <CustomForm
          className={classes.inputTag}
          name={props.name}
          nameInput="fullName"
          placeholder="Họ và tên"
          inputType="input"
        />
      </Box>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <p className={classes.titleText}>Địa chỉ Email</p>
            <CustomForm
              className={classes.inputTag}
              name={props.name}
              nameInput="email"
              placeholder="VD:dsdsd@gmail.com"
              inputType="input"
            />
          </Grid>
          <Grid item lg={6}>
            <p className={classes.titleText}>Số điện thoại</p>
            <CustomForm
              className={classes.inputTag}
              nameInput="telephoneNumber"
              inputType="number"
              name={props.name}
              placeholder="02323242"
            />
          </Grid>
        </Grid>
      </Box>
      <Box mb={2} className={classes.addAddressMobile}>
        <p className={classes.titleText}>Địa chỉ nhận hàng</p>
        {/* {props.values.city !== -1 &&
        props.values.district !== -1 &&
        props.values.ward !== -1 &&
        props.values.address !== "" ? (
          <p>{`${props.values.address}, ${props.values.ward}, ${props.values.district}, ${props.values.city}`}</p>
        ) : (
          <p onClick={props.showMenuSubAddress}>+ Thêm địa chỉ</p>
        )} */}
      </Box>
      <Box mb={2} className={classes.city}>
        <p className={classes.titleText}>Tỉnh/Thành phố</p>
        <CustomForm
          className={classes.inputTag}
          name={props.name}
          nameInput="city"
          inputType="select"
          nameSelect="Chọn tỉnh/thành phố"
          valueOptions={props.city}
        />
      </Box>
      <Box mb={2} className={classes.district}>
        <Grid container spacing={2}>
          {props.district ? (
            <Grid item lg={6}>
              <p className={classes.titleText}>Quận/Huyện</p>
              <CustomForm
                className={classes.selectTag}
                nameInput="district"
                inputType="select"
                name={props.name}
                nameSelect="Chọn quận/huyện"
                valueOptions={props.district}
              />
            </Grid>
          ) : null}
          {props.ward ? (
            <Grid item lg={6}>
              <p className={classes.titleText}>Phường/Xã</p>
              <CustomForm
                className={classes.selectTag}
                nameInput="ward"
                name={props.name}
                nameSelect="Chọn phường/xã"
                inputType="select"
                valueOptions={props.ward}
              />
            </Grid>
          ) : null}
        </Grid>
      </Box>
      <Box mb={2} className={classes.ward}>
        <p className={classes.titleText}>Địa chỉ cụ thể</p>
        <CustomForm
          placeholder="VD: 253/4 Lê Duẩn"
          className={classes.inputTag2}
          name={props.name}
          inputType="input"
          nameInput="address"
        />
      </Box>
    </>
  );
};
export default ShippingInfo;
