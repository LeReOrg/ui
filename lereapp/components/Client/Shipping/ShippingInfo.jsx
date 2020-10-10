import React from "react";
import {Field, ErrorMessage } from "formik";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyled = makeStyles((theme) => ({
    inputTag : {
        width : 250
    },
}))
const city = [
  {
    idCity: 1,
    nameCity: "Hồ chí Minh",
  },
  {
    idCity: 1,
    nameCity: "Hà Nội",
  },
];
const district = [
  {
    idDistrct: 1,
    idCity: 1,
    nameCity: "Go Vap",
  },
  {
    idDistrct: 2,
    idCity: 1,
    nameCity: "Phu Nhuan",
  },
  {
    idDistrct: 3,
    idCity: 2,
    nameCity: "Hang Buom",
  },
  {
    idDistrct: 4,
    idCity: 2,
    nameCity: "Pho Ha Noi",
  },
];
const ward = [
  {
    idWard: 1,
    idDistrct: 1,
    nameCity: "Go Vap w",
  },
  {
    idWard: 2,
    idDistrct: 1,
    nameCity: "Phu Nhuan w",
  },
  {
    idWard: 3,
    idDistrct: 2,
    nameCity: "Hang Buom w",
  },
  {
    idDistrct: 4,
    idDistrct: 2,
    nameCity: "Pho Ha Noi w",
  },
];
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
const ShippingInfo = (props) => {
    const classes = useStyled();
  return (
    <>
      <Box mb={2}>
        <p>Họ và tên</p>
        <Field
          className={classes.inputTag}
          name="fullName"
          placeholder="Họ và tên"
        />
      </Box>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <p>Địa chỉ Email</p>
            <Field
              className={classes.inputTag}
              name="email"
              type="email"
              placeholder="VD:dsdsd@gmail.com"
            />
          </Grid>
          <Grid item lg={6}>
            <p>Số điện thoại</p>
            <Field
              className={classes.inputTag}
              name="telephoneNumber"
              type="number"
              placeholder="02323242"
            />
          </Grid>
        </Grid>
      </Box>
      <Box mb={2}>
        <p>Tỉnh/Thành phố</p>
        <Field name="city" as="select" onChange={props.handleChange}>
          <option defaultValue hidden>
            Chọn tỉnh/thành phố
          </option>
          {renderCity()}
        </Field>{" "}
      </Box>

      <ErrorMessage name="fullName" />

      <Field name="district" as="select" onChange={props.handleChange}>
        <option defaultValue hidden></option>
        {renderDistrict(props.values.city)}
      </Field>
      <Field name="ward" as="select">
        <option defaultValue hidden></option>
        {renderWard(props.values.district)}
      </Field>
      <Field name="address" />
    </>
  );
};
export default ShippingInfo;
