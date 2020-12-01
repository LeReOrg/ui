import React from "react";
import { Form, Formik, Field, ErrorMessage, useFormik } from "formik";
import { object, string, number } from "yup";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Box, Grid, Link } from "@material-ui/core";
import UploadInfo from "./UploadInfo";
import { useSelector, useDispatch } from "react-redux";
import UploadPrice from "./UploadPrice";

const UploadProduct = (props) => {
  const categoriesItem = useSelector((state) => state.categories.categories);
  const useStyled = makeStyles((theme) => ({
    uploadMain: {
      width: "80%",
      margin: "37px auto 0 auto",
      [theme.breakpoints.down("sm")]: {
        width: "95%",
      },
    },
    uploadMain_Info: {
      border: " 1px solid rgba(0, 0, 0, 0.15)",
      borderRadius: "8px",
      marginBottom: 24,
      [theme.breakpoints.down("sm")]: {
        border: "none",
      },
    },
    uploadMain_InfoContent: {
      paddingLeft: 24,
      paddingTop: 24,
      paddingBottom: 24,
    },
    uploadMain_Info__Title: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 20,
    },
    uploadMain_InfoBody: {
      width: "80%",
      margin: "0 auto",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    uploadMain_Price: {
      border: " 1px solid rgba(0, 0, 0, 0.15)",
      borderRadius: "8px",
    },
  }));

  const classes = useStyled();
  const initialValues = {
    imageProduct: [],
    nameProduct: "",
    descriptor: "",
    telephoneNumber: "",
    type_product: -1,
    price_product: "",
    pile_price: "",
  };
  return (
    <div className={classes.uploadMain}>
      <Formik
        initialValues={initialValues}
        // onSubmit={(values) => payment(values)}
        // validationSchema={object({
        //   fullName: string().required("Full Name is required").min(6).max(100),
        //   email: string().required("Email is required").min(10).max(100),
        //   telephoneNumber: number().required("TelephoneNumber is required"),
        //   city: number().required("City is required").min(0),
        //   district: number().required("District is required").min(0),
        //   ward: number().required("Ward is required").min(0),
        // })}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldValue,
        }) => (
          <Form>
            <Grid container className={classes.uploadMain_Info}>
              <Grid item lg={12} className={classes.uploadMain_InfoContent}>
                <h1 className={classes.uploadMain_Info__Title}>
                  Thông tin sản phẩm
                </h1>
                <Box className={classes.uploadMain_InfoBody}>
                  <UploadInfo
                    values={values}
                    type_product={categoriesItem}
                    errors={errors}
                    handleChange={handleChange}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container className={classes.uploadMain_Info}>
              <Grid item lg={12} className={classes.uploadMain_InfoContent}>
                <h1 className={classes.uploadMain_Info__Title}>
                  Giá thuê sản phẩm
                </h1>
                <Box className={classes.uploadMain_InfoBody}>
                  <UploadPrice
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                    handleChange={handleChange}
                  />
                </Box>
              </Grid>
            </Grid>
            <div className={classes.main_recipent__paymentButton}>
              <button type="submit">Đăng sản phẩm</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapDispatchToProps)(UploadProduct);
