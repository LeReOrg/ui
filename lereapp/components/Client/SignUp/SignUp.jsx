import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  googleSignInStart,
  faceBookSignInStart,
} from "../../../store/action/user_action";
import styles from "./SignUpPageStyled";
import BackGroundLogin from "../../../assets/background_login.png";
import { Grid, Box } from "@material-ui/core";
import { MyButton } from "./SignUpPageStyled";
import Link from "next/link";
import { isEmpty } from "lodash";
//  import * as Yup from "yup";

const SignUpPage = (props) => {
  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };
  const [disabled, setDisabled] = useState(true);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const signInEmail = () => {
    dispatch(googleSignInStart());
  };
  const signInFaceBook = () => {
    dispatch(faceBookSignInStart());
  };
  // const SignUpPage = () => {};
  return (
    <div className={classes.main_page_login}>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={6} className={classes.main_page_image}>
          <div className={classes.main_page_background}>
            <img src={BackGroundLogin} />
          </div>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <div className={classes.main_page_content}>
            <div className={classes.main_page_contentTitle}>
              Đăng ký tài khoản
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => loginHandel(values)}
              validationSchema={object({
                password: string()
                  .required("Password is required")
                  .min(8)
                  .max(100),
                email: string().required("Email is required").max(100),
                phoneNumber: string().min(10).max(100),
                fullName: string()
                  .required("FullName is required")
                  .max(100)
                  .email("Invalid email"),
              })}
            >
              {({ values, errors, handleChange }) => (
                <Form>
                  <p className={classes.emailTitle}>Họ và tên</p>
                  <Field
                    className={classes.emailFormLogin}
                    name="fullName"
                    placeholder="Nhập họ và tên đầy đủ"
                  />
                  <ErrorMessage name="fullName" />
                  <p className={classes.emailTitle}>Địa chỉ Email</p>
                  <Field
                    className={classes.emailFormLogin}
                    name="email"
                    placeholder="Nhập Email"
                  />
                  <ErrorMessage name="email" />
                  <p className={classes.emailTitle}>Số điện thoại</p>
                  <Field
                    type="number"
                    className={classes.emailFormLogin}
                    name="phoneNumber"
                    placeholder="Nhập số điện thoại"
                  />
                  <ErrorMessage name="phoneNumber" />
                  <p className={classes.passwordTitle}>Nhập mật khẩu</p>
                  <Field
                    className={classes.passwordFormLogin}
                    name="password"
                    placeholder="Tối thiểu 8 ký tự"
                    type="password"
                  />
                  <ErrorMessage name="password" />
                  {values.email !== "" &&
                  values.password !== "" &&
                  values.fullName !== "" &&
                  values.phoneNumber !== "" &&
                  isEmpty(errors)
                    ? setDisabled(false)
                    : setDisabled(true)}
                  <MyButton
                    type="submit"
                    isDisabled={disabled}
                    disabled={disabled}
                  >
                    Tạo tài khoản
                  </MyButton>
                </Form>
              )}
            </Formik>

            <Box fontSize={14} mt={3}>
              Đã có tài khoản?
              <Link href="/login">
                <a
                  style={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#2F80ED",
                    paddingLeft: 4,
                  }}
                >
                  Đăng nhập
                </a>
              </Link>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(SignUpPage);
