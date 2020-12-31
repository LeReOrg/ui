import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import {
  googleSignInStart,
  faceBookSignInStart,
} from "../../../store/action/user_action";
import styles from "./LoginPageStyled";
import BackGroundLogin from "../../../assets/background_login.png";
import { Grid, Box } from "@material-ui/core";
import { MyButton } from "./LoginPageStyled";
import Link from "next/link";
import { isEmpty } from "lodash";

const LoginPage = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [disabled, setDisabled] = useState(true);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const loginHandel = () => {};
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
                    name="email"
                    placeholder="Nhập Email hoặc số điện thoại"
                  />
                  <ErrorMessage name="email" />
                  <p className={classes.passwordTitle}>Mật khẩu</p>
                  <Field
                    className={classes.passwordFormLogin}
                    name="password"
                    placeholder="Nhập mật khẩu"
                    type="password"
                  />
                  <ErrorMessage name="password" />
                  <Link href="/forgotPassword">
                    <a style={{ textDecoration: "none" }}>
                      <Box
                        textAlign="right"
                        fontWeight="bold"
                        fontSize={16}
                        color="#2F80ED"
                        mb={2}
                      >
                        Quên mật khẩu
                      </Box>
                    </a>
                  </Link>
                  {values.email !== "" &&
                  values.password !== "" &&
                  isEmpty(errors)
                    ? setDisabled(false)
                    : setDisabled(true)}
                  <MyButton
                    type="submit"
                    isDisabled={disabled}
                    disabled={disabled}
                  >
                    Đăng nhập
                  </MyButton>
                </Form>
              )}
            </Formik>
            <Box mt={2} fontSize={14} color="#888E8A" mb={2}>
              Hoặc đăng nhập bằng
            </Box>
            <div onClick={signInFaceBook} className={classes.facebookButton}>
              <div className={classes.faceBookIcon}></div>
              <span>Facebook</span>
            </div>
            <div onClick={signInEmail} className={classes.gmailButton}>
              <div className={classes.gmailIcon}></div>
              <span>Google</span>
            </div>
            <Box fontSize={14}>
              Chưa có tài khoản?
              <Link href="/signup">
                <a
                  style={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#2F80ED",
                    paddingLeft: 4,
                  }}
                >
                  Đăng ký ngay
                </a>
              </Link>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
