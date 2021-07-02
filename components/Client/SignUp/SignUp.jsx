import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import styles from "./SignUpPageStyled";
import BackGroundLogin from "../../../assets/background_login.png";
import { Grid, Box } from "@material-ui/core";
import { MyButton } from "./SignUpPageStyled";
import Link from "next/link";
import { isEmpty } from "lodash";
import CustomForm from "../../../utils/CustomForm.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { useSignUp } from "../../../hooks/useAuthentication";
import { userState, errorCodeState } from "../../../lib/recoil-root";
import { useRecoilState } from "recoil";
const schema = yup.object().shape({
  email: yup.string().required().email().max(100),
  password: yup.string().required().min(8).max(100),
  phoneNumber: yup.string().min(10).max(100),
  displayName: yup.string().required().max(100),
});
const SignUpPage = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [currentUser, setcurrentUser] = useRecoilState(userState);
  const [errorCode, setErrorCode] = useRecoilState(errorCodeState);
  const { mutate, data, isLoading } = useSignUp();
  const useStyles = makeStyles(styles);
  const { register, handleSubmit, watch, setValue, errors } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const isErrors = isEmpty(errors);
  let email = watch("email");
  let password = watch("password");
  let phoneNumber = watch("phoneNumber");
  let displayName = watch("displayName");
  useEffect(() => {
    if (email && password && isErrors && displayName && phoneNumber) {
      setDisabled(false);
      setErrorCode((preState) => ({
        ...preState,
        status: "",
        message: "",
        code: "",
      }));
    } else {
      setDisabled(true);
    }
  }, [errors, email, password, phoneNumber, displayName]);
  // useEffect(() => {
  //   return () => {
  //     setErrorCode((preState) => ({
  //       ...preState,
  //       status: "",
  //       message: "",
  //       code: "",
  //     }));
  //   };
  // }, [errorCode]);
  const registerHandle = async (data) => {
    mutate(data);
  };
  const classes = useStyles();
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
            <form onSubmit={handleSubmit(registerHandle)}>
              <p className={classes.emailTitle}>Họ và tên</p>

              <CustomForm
                inputType="input"
                className={classes.emailFormLogin}
                nameInput="displayName"
                name={register}
                placeholder="Nhập họ và tên đầy đủ"
              />
              <p style={{ color: "red", fontStyle: "italic" }}>
                {errors.displayName?.message}
              </p>
              <p className={classes.emailTitle}>Địa chỉ Email</p>
              <CustomForm
                inputType="input"
                className={classes.emailFormLogin}
                name={register}
                placeholder="Nhập Email"
                nameInput="email"
              />
              <p style={{ color: "red", fontStyle: "italic" }}>
                {errors.email?.message}
              </p>
              <p className={classes.emailTitle}>Số điện thoại</p>
              <CustomForm
                inputType="number"
                className={classes.emailFormLogin}
                nameInput="phoneNumber"
                name={register}
                placeholder="Nhập số điện thoại"
              />
              <p style={{ color: "red", fontStyle: "italic" }}>
                {errors.phoneNumber?.message}
              </p>

              <p className={classes.passwordTitle}>Nhập mật khẩu</p>
              <CustomForm
                className={classes.passwordFormLogin}
                nameInput="password"
                name={register}
                placeholder="Tối thiểu 8 ký tự"
                inputOption="password"
                inputType="input"
              />
              <p style={{ color: "red", fontStyle: "italic" }}>
                {errors.password?.message}
              </p>
              {errorCode.code === 2 && (
                <p style={{ color: "red", fontStyle: "italic" }}>
                  Email đã tồn tại
                </p>
              )}
              <MyButton type="submit" isDisabled={disabled} disabled={disabled}>
                Tạo tài khoản
              </MyButton>
            </form>
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

export default SignUpPage;
