import React, { useState, useEffect } from "react";
import { Box, Grid, Link, Button } from "@material-ui/core";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core/styles";
// import { city, ward, district } from "../dataEx";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import styles from "./ShippingStyled";

const AddAddressMobile = (props) => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (props.values.city != -1) setDisabled(false);
  }, [props.values.city]);
  const theme = createTheme({
    overrides: {
      MuiButton: {
        text: {
          background: "#2FAF62",
          borderRadius: 4,
          border: 0,
          color: "white",
          height: 48,
          padding: "0 30px",
          fontWeight: "bold",
          fontSize: 16,
          width: "100%",
          "&:hover": {
            background: "red",
          },
        },
      },
    },
  });
  const useStyled = makeStyles(styles);
  const classes = useStyled({
    disabled: disabled,
  });
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
  return (
    <div className={classes.main_addressMobile}>
      <div>
        <ArrowBackIcon />
        <span>Quay về thanh toán</span>
      </div>
      <div className={classes.main_addressMobileContent}>
        <p className={classes.titleText}>Địa chỉ nhận hàng</p>
      </div>
      <Box mb={2}>
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
      <Box mb={2}>
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
      <Box mb={2}>
        <p className={classes.titleText}>Địa chỉ cụ thể</p>
        <Field
          placeholder="VD: 253/4 Lê Duẩn"
          className={classes.inputTag2}
          name="address"
        />
      </Box>
      <Box>
        <ThemeProvider theme={theme}>
          <Button onClick={props.getValueBack}>Hoàn tất</Button>
        </ThemeProvider>
      </Box>
    </div>
  );
};

export default AddAddressMobile;
