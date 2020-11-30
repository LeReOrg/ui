import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import { makeStyles } from "@material-ui/styles";
import { Box, Grid, Link } from "@material-ui/core";
import UploadInfo from "./UploadInfo";

const UploadProduct = () => {
  const useStyled = makeStyles((theme) => ({
    uploadMain: {
      width: "80%",
      margin: "37px auto 0 auto",
    },
    uploadMain_Info: {
      border: " 1px solid rgba(0, 0, 0, 0.15)",
      borderRadius: "8px",
      marginBottom: 24,
    },
    uploadMain_InfoContent : {
        paddingLeft : 24,
        paddingTop : 24,
        paddingBottom : 24
    },
    uploadMain_Info__Title : {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20
    },
    uploadMain_InfoBody : {
        width : "80%",
        margin: "0 auto"
    },
    uploadMain_Price: {
      border: " 1px solid rgba(0, 0, 0, 0.15)",
      borderRadius: "8px",
    },
  }));
  const classes = useStyled();
  const initialValues = {
    nameProduct: "",
    descriptor: "",
    telephoneNumber: "",
    type_product: [],
    price_product: 0,
    pile_price: 0,
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
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <Grid
              container
              className={classes.uploadMain_Info}
            >
                  <Grid item lg={12}  className={classes.uploadMain_InfoContent}>
                  <h1  className={classes.uploadMain_Info__Title}>Thông tin sản phẩm</h1>
                    <Box  className={classes.uploadMain_InfoBody}>
                          <UploadInfo
                            values={values}
                            errors={errors}
                            handleChange={handleChange}
                          />
                    </Box>
                  </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UploadProduct;
