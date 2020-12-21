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

const ResetPasswordPage = (props) => {
  const initialValues = {
    newPassword: "",
    reNewPassword: "",
  };
  const [done, setDone] = useState(false);
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
            {!done ? (
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => loginHandel(values)}
                validationSchema={object({
                  newPassword: string().required("Email is required").max(100),
                })}
              >
                {({ values, errors, handleChange }) => (
                  <Form>
                    <p className={classes.emailTitle}>Đặt mật khẩu mới</p>
                    <Field
                      className={classes.emailFormLogin}
                      name="newPassword"
                      placeholder="Đặt mật khẩu mới"
                    />
                    <ErrorMessage name="newPassword" />
                    <p className={classes.emailTitle}>Nhập lại mật khẩu</p>
                    <Field
                      className={classes.emailFormLogin}
                      name="reNewPassword"
                      placeholder="Nhập lại mật khẩu"
                    />
                    <ErrorMessage name="reNewPassword" />
                    {values.email !== "" && isEmpty(errors)
                      ? setDisabled(false)
                      : setDisabled(true)}
                    <MyButton
                      type="submit"
                      isDisabled={disabled}
                      disabled={disabled}
                    >
                      Đặt mật khẩu mới
                    </MyButton>
                  </Form>
                )}
              </Formik>
            ) : 
            <div><p>
            Oke, chúng tôi đã đặt lại mật khẩu cho bạn 👌
            </p></div>
            }
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResetPasswordPage;
