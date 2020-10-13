import React from "react";
import { Field, ErrorMessage } from "formik";
import { Box, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { useEffect } from "react";
import { city, ward, district } from "../dataEx";

const ShippingInfo = (props) => {
const [disabled,setDisabled] = useState(true);
const [showMenuSub, setshowMenuSub] = useState(false);

const widthinputTag = 350;
useEffect(() =>{
    if (props.values.city != -1) setDisabled(false);
},[props.values.city])
 const useStyled = makeStyles((theme) => ({
   inputTag: {
     width: `${widthinputTag}px`,
     border: "1px solid #C3C7C5",
     borderRadius: 4,
     padding: "10px 12px",
     backgroundColor: "white",
   },
   inputTag2: {
     width: "100%",
     border: "1px solid #C3C7C5",
     borderRadius: 4,
     padding: "10px 12px",
     backgroundColor: "white",
   },
   selectTag: {
     width: 350,
     border: "1px solid #C3C7C5",
     borderRadius: 4,
     padding: "10px 12px",
     backgroundColor: `${disabled ? "#F3F4F3" : "white"} `,
     pointerEvents: `${disabled ? "none" : "auto"} `,
   },
   titleText: {
     fontStyle: "normal",
     fontWeight: "bold",
     fontSize: 14,
     paddingBottom: 3,
   },
   city: {
     [theme.breakpoints.down("xs")]: {
       display: "none",
     },
   },
   ward: {
     [theme.breakpoints.down("xs")]: {
       display: "none",
     },
   },
   district: {
     [theme.breakpoints.down("xs")]: {
       display: "none",
     },
   },
 }));

const renderCity = () => {
  return city.map((item, index) => (
    <option key={index} value={index + 1}>
      {item.nameCity}
    </option>
  ));
};
const renderDistrict = (values) => {
  const ef = parseInt(values);
  return district
    .filter((e) => e.idCity == ef)
    .map((item, index) => (
      <option key={index} value={index + 1}>
        {item.nameCity}
      </option>
    ));
};
const renderWard = (values) => {
  const ef = parseInt(values);
  return ward
    .filter((e) => e.idDistrct == ef)
    .map((item, index) => (
      <option key={index} value={index + 1}>
        {item.nameCity}
      </option>
    ));
};
  const classes = useStyled();
  return (
    <>
      <Box mb={2}>
        <p className={classes.titleText}>Họ và tên</p>
        <Field
          className={classes.inputTag}
          name="fullName"
          placeholder="Họ và tên"
        />
        <ErrorMessage name="fullName" />
      </Box>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <p className={classes.titleText}>Địa chỉ Email</p>
            <Field
              className={classes.inputTag}
              name="email"
              type="email"
              placeholder="VD:dsdsd@gmail.com"
            />
            <ErrorMessage name="email" />
          </Grid>
          <Grid item lg={6}>
            <p className={classes.titleText}>Số điện thoại</p>
            <Field
              className={classes.inputTag}
              name="telephoneNumber"
              type="number"
              placeholder="02323242"
            />
            <ErrorMessage name="fullName" />
          </Grid>
        </Grid>
      </Box>
      <Box mb={2}>
        <p className={classes.titleText}>Địa chỉ nhận hàng</p>
        {props.values.city !== -1 &&
        props.values.district !== -1 &&
        props.values.ward !== -1 &&
        props.values.address !== "" ? (
          <p>{`${props.values.address}, ${props.values.ward}, ${props.values.district}, ${props.values.city}`}</p>
        ) : (
          <p onClick={props.showMenuSubAddress}>+ Thêm địa chỉ</p>
        )}
      </Box>
      <Box mb={2} className={classes.city}>
        <p className={classes.titleText}>Tỉnh/Thành phố</p>
        <Field
          className={classes.inputTag}
          name="city"
          as="select"
          onChange={props.handleChange}
        >
          <option defaultValue hidden>
            Chọn tỉnh/thành phố
          </option>
          {renderCity()}
        </Field>
      </Box>
      <Box mb={2} className={classes.district}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <p className={classes.titleText}>Quận/Huyện</p>
            <Field
              className={classes.selectTag}
              name="district"
              as="select"
              onChange={props.handleChange}
            >
              <option defaultValue hidden></option>
              {renderDistrict(props.values.city)}
            </Field>
          </Grid>
          <Grid item lg={6}>
            <p className={classes.titleText}>Phường/Xã</p>
            <Field className={classes.selectTag} name="ward" as="select">
              <option defaultValue hidden></option>
              {renderWard(props.values.district)}
            </Field>
          </Grid>
        </Grid>
      </Box>
      <Box mb={2} className={classes.ward}>
        <p className={classes.titleText}>Địa chỉ cụ thể</p>
        <Field
          placeholder="VD: 253/4 Lê Duẩn"
          className={classes.inputTag2}
          name="address"
        />
      </Box>
    </>
  );
};
export default ShippingInfo;
