import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import styles from "./LoginPageStyled";
import BackGroundLogin from "../../../assets/background_login.png";
import { Grid, Box } from "@material-ui/core";
import { MyButton } from "./LoginPageStyled";
import Link from "next/link";
import { isEmpty } from "lodash";
import { useForm } from "react-hook-form";
import CustomForm from "../../../utils/CustomForm.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import {
  signInWithGoogle,
  signInWithFacebook,
} from "../../../firebase/firenase.utils";
import { logInEmailAndPassword } from "../../../hooks/useAuthentication";
import { useLoginByFireBase } from "../../../hooks/useAuthentication";
import { userState } from "../../../lib/recoil-root";
import { useRecoilState } from "recoil";
const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const LoginPage = (props) => {
  const { register, handleSubmit, watch, setValue, errors } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const [currentUser, setcurrentUser] = useRecoilState(userState);
  const router = useRouter();
  const [disabled, setDisabled] = useState(true);
  const { mutate, isLoading } = useLoginByFireBase();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  useEffect(() => {
    if (currentUser !== "") {
      router.back();
    }
  }, [currentUser]);

  const handlerLoginSocial = async (typeLogin) => {
    if (typeLogin === "google") {
      signInWithGoogle()
        .then((res) => {
          const result = res.user;
          if (result) {
            const valueParam = {
              uid: result.uid,
              displayName: result.displayName,
              email: result.email,
              avatar: result.photoURL,
            };
            mutate(valueParam);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      signInWithFacebook()
        .then((res) => {
          const result = res.user;
          if (result) {
            const valueParam = {
              uid: result.uid,
              displayName: result.displayName,
              email: result.email,
              avatar: result.photoURL,
            };
            mutate(valueParam);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const isErrors = isEmpty(errors);
  let email = watch("email");
  let password = watch("password");
  useEffect(() => {
    if (email && password && isErrors) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [errors, email, password]);
  const loginHandle = async (data) => {
    let paramsUpdate = data;
    const res = await logInEmailAndPassword(paramsUpdate);
    res && setcurrentUser(res);
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
            <div className={classes.main_page_contentTitle}>Đăng nhập</div>
            <form onSubmit={handleSubmit(loginHandle)}>
              <p className={classes.emailTitle}>Email hoặc SĐT</p>
              <CustomForm
                inputType="input"
                className={classes.emailFormLogin}
                nameInput="email"
                name={register}
                placeholder="Nhập Email hoặc số điện thoại"
              />
              <p style={{ color: "red", fontStyle: "italic" }}>
                {errors.email?.message}
              </p>
              <p className={classes.passwordTitle}>Mật khẩu</p>
              <CustomForm
                className={classes.passwordFormLogin}
                name={register}
                nameInput="password"
                placeholder="Nhập mật khẩu"
                inputOption="password"
                inputType="input"
              />
              <p style={{ color: "red", fontStyle: "italic" }}>
                {errors.password?.message}
              </p>
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

              <MyButton type="submit" isDisabled={disabled} disabled={disabled}>
                Đăng nhập
              </MyButton>
            </form>
            <Box mt={2} fontSize={14} color="#888E8A" mb={2}>
              Hoặc đăng nhập bằng
            </Box>
            <div
              onClick={() => handlerLoginSocial("facebook")}
              className={classes.facebookButton}
            >
              <div className={classes.faceBookIcon}></div>
              <span>Facebook</span>
            </div>
            <div
              onClick={() => handlerLoginSocial("google")}
              className={classes.gmailButton}
            >
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
