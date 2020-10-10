import React from "react";
import ShippingInfo from "../components/Client/Shipping/ShippingInfo";
import RecipentItems from "../components/Client/Shipping/RecipentItems";
import PaymentInfo from "../components/Client/Shipping/PaymentInfo";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
const Shipping = () => {
  const useStyled = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    main_shipping: {
      margin: "30px 80px",
    },
    main_shipping__content: {},
    main_shipping__contentLeft: {
      border: "1px solid #C3C7C5",
      borderRadius: 8,
      padding: 24
    },
    main_shipping__contentLeftInfo: {
        width : "90%",
        margin : "20px auto"
    },
    main_shipping__contentLeftTitle :{
        fontWeight : 700,
        fontStyle : "normal",
        fontSize : 20,

    },
    main_shipping__contentRight: {
      border: "1px solid #C3C7C5",
      borderRadius: 8,
    },
  }));
  const classes = useStyled();
  const initialValues = {
    fullName: "",
    email: "",
    telephoneNumber: "",
    city: -1,
    district: -1,
    ward: -1,
    address: "",
  };
  const payment = (values) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  };
  return (
    <div className={classes.main_shipping}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => payment(values)}
        validationSchema={object({
          fullName: string().required("Full Name is required").min(6).max(100),
          email: string().required("Email is required").min(10).max(100),
          telephoneNumber: number().required("TelephoneNumber is required"),
          city: number().required("City is required").min(0),
          district: number().required("District is required").min(0),
          ward: number().required("Ward is required").min(0),
        })}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item lg={8} md={7} xs={12}>
                <Box>
                  <Box className={classes.main_shipping__contentLeft}>
                    <h1 className={classes.main_shipping__contentLeftTitle}>
                      Thông tin nhận hàng
                    </h1>
                    <Box className={classes.main_shipping__contentLeftInfo}>
                      <ShippingInfo
                        values={values}
                        errors={errors}
                        handleChange={handleChange}
                      />
                    </Box>
                  </Box>
                  <PaymentInfo values={values} />
                </Box>
              </Grid>
              <Grid item lg={4} md={5} xs={12}>
                <Box className={classes.main_shipping__contentRight}>
                  <RecipentItems />
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Shipping;
