import React,{useState,useEffect} from 'react';
import { Box, Grid, Link, Button } from "@material-ui/core";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/styles";
import {city,ward,district} from "../dataEx";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const AddAddressMobile = (props) => {
  const widthinputTag = 350;
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (props.values.city != -1) setDisabled(false);
  }, [props.values.city]);
 const theme = createMuiTheme({
   overrides: {
     // Style sheet name ⚛️
     MuiButton: {
       // Name of the rule
       text: {
         // Some CSS
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
    main_addressMobile: {},
    main_addressMobileContent : {
      marginTop : 30
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