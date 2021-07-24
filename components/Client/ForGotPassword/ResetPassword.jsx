import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import styles from "./ForGotPasswordStyled";
import BackGroundLogin from "../../../assets/background_login.png";
import { Grid, Box } from "@material-ui/core";
import { MyButton } from "./ForGotPasswordStyled";
import { isEmpty } from "lodash";
import CustomForm from "../../../utils/CustomForm.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as yup from "yup";
import { useRecoilValue } from "recoil";
import { tokenOTPState } from "../../../lib/recoil-root";
import { useChangePassword } from "../../../hooks/useUser/";
const schema = yup.object().shape({
  newPassword: yup.string().required().min(8),
  reNewPassword: yup.string().required().min(8),
});
const ResetPasswordPage = () => {
  const tokenOTP = useRecoilValue(tokenOTPState);
  const router = useRouter();
  const { mutate, data, isLoading, isSuccess } = useChangePassword();

  const { register, handleSubmit, watch, setValue, errors } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const [done, setDone] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [countDown, setCountDown] = useState(5);
  const isErrors = isEmpty(errors);
  let newPassword = watch("newPassword");
  let reNewPassword = watch("reNewPassword");
  useEffect(() => {
    if (newPassword && reNewPassword && isErrors) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [errors, newPassword, reNewPassword]);
  useEffect(() => {
    if (data) {
      setDone(true);
    }
  }, [isSuccess]);
  useEffect(() => {
    const intervel = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);
    if (countDown === 0) {
      clearInterval(intervel);
      router.push("/login");
    }
    return () => {
      clearInterval(intervel);
    };
  }, [countDown]);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const resetPassword = (data) => {
    if (data.newPassword === data.reNewPassword) {
      const params = {
        password: data.newPassword,
        token: tokenOTP,
      };
      mutate(params);
    }
  };
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
              <form onSubmit={handleSubmit(resetPassword)}>
                <p className={classes.emailTitle}>Đặt mật khẩu mới</p>
                <CustomForm
                  className={classes.emailFormLogin}
                  nameInput="newPassword"
                  placeholder="Đặt mật khẩu mới"
                  name={register}
                  inputType="input"
                  inputOption="password"
                />
                <p className={classes.emailTitle}>Nhập lại mật khẩu</p>
                <CustomForm
                  inputType="input"
                  name={register}
                  className={classes.emailFormLogin}
                  nameInput="reNewPassword"
                  placeholder="Nhập lại mật khẩu"
                  inputOption="password"
                />
                <MyButton
                  type="submit"
                  isDisabled={disabled}
                  disabled={disabled}
                >
                  Đặt mật khẩu mới
                </MyButton>
              </form>
            ) : (
              <div>
                <p>Oke, chúng tôi đã đặt lại mật khẩu cho bạn 👌</p>
                <Box mt={3}>
                  <p style={{ marginBottom: 10 }}>
                    Bạn sẽ tự động về trang đăng nhập sau {countDown}s
                  </p>
                  <div
                    onClick={() => router.push("/login")}
                    className={classes.reLogin}
                  >
                    Đăng Nhập Lại
                  </div>
                </Box>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResetPasswordPage;
