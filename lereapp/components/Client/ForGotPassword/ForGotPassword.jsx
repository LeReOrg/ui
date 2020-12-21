import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import styles from "./ForGotPasswordStyled";
import BackGroundLogin from "../../../assets/background_login.png";
import { Grid } from "@material-ui/core";
import { MyButton } from "./ForGotPasswordStyled";
import Link from "next/link";
import { isEmpty } from "lodash";

const ForGotPasswordPage = (props) => {
  const initialValues = {
    email: "",
    code : ""
  };
  const [code,setCode]  = useState(false)
  const [disabled, setDisabled] = useState(true);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const dispatch = useDispatch();
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
            <div className={classes.main_page_contentTitle}>Quên mật khẩu</div>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => loginHandel(values)}
              validationSchema={object({
                email: string()
                  .required("Email is required")
                  .max(100)
                  .email("Invalid email"),
              })}
            >
              {({ values, errors, handleChange }) => (
                <Form>
                  {code ? 
                  <>
                    <p className={classes.emailTitle}>Nhập Email của bạn</p>
                    <Field
                      className={classes.emailFormLogin}
                      name="email"
                      placeholder="Địa chỉ Email"
                    />
                    <ErrorMessage name="email" />
                  </>
                  :   <>
                  {/* <p className={classes.emailTitle}>Nhập mã khôi phục <span style={{color: "#888E8A",fontSize : 14}}>(gửi qua tuannvadsg@gmail.com)</span></p> */}
                  <p className={classes.emailTitle}>Nhập mã khôi phục</p>

                  <Field
                    className={classes.emailFormLogin}
                    name="code"
                    placeholder="VD: 84XCVJF94"
                  />
                  <ErrorMessage name="code" />
                </> }
                  {values.email !== "" && isEmpty(errors)
                    ? setDisabled(false)
                    : setDisabled(true)}
                  <MyButton
                    type="submit"
                    isDisabled={disabled}
                    disabled={disabled}
                  >
                    Lấy lại mật khẩu
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

export default ForGotPasswordPage;
