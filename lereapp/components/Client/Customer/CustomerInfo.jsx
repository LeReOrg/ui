import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useDispatch, useSelector, connect } from "react-redux";
import styles from "./CustomerStyled";
import { Grid, Box } from "@material-ui/core";
import { MyButton } from "../Login/LoginPageStyled";

const CustomerInfo = (props) => {
  const initialValues = {
    fullname: props.fullName != undefined ? props.fullName : "",
    email: props.email != undefined ? props.email : "",
    telephone: props.telephone != undefined ? props.telephone : "",
    gender: props.gender != undefined ? props.gender : "",
    dateOfBirth: props.dateOfBirth != undefined ? props.dateOfBirth : "",
    monthOfBirth: props.monthOfBirth != undefined ? props.monthOfBirth : "",
    yearOfBirth: props.yearOfBirth != undefined ? props.yearOfBirth : "",
  };
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const dispatch = useDispatch();

  const loginHandel = () => {};
  return (
    <div className={classes.main_page_login}>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} xs={12}>
          <div className={classes.main_page_content}>
            <div className={classes.main_page_contentTitle}>Đăng nhập</div>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => loginHandel(values)}
              validationSchema={object({
                password: string()
                  .required("Password is required")
                  .min(8)
                  .max(100),
                email: string().required("Email is required").max(100),
              })}
            >
              {({ values, errors, handleChange }) => (
                <Form>
                  <p className={classes.emailTitle}>Email hoặc SĐT</p>
                  <Field
                    className={classes.emailFormLogin}
                    name="fullname"
                    placeholder="Nhập Ten hoặc số điện thoại"
                  />
                  <ErrorMessage name="email" />
                  <p className={classes.passwordTitle}>Mật khẩu</p>
                  <Field
                    className={classes.passwordFormLogin}
                    name="email"
                    placeholder="Nhập mật khẩu"
                    type="email"
                  />
                  <ErrorMessage name="dateOfBirth" />
                  <Field as="select" name="color">
                    <option value="red">Red</option>
                  </Field>
                  <Field as="select" name="monthOfBirth">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </Field>
                  <Field as="select" name="yearOfBirth">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </Field>
                  <MyButton
                    type="submit"
                  >
                    Cập nhật
                  </MyButton>
                </Form>
              )}
            </Formik>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomerInfo;
