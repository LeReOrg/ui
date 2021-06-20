import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import styles from "./ForGotPasswordStyled";
import BackGroundLogin from "../../../assets/background_login.png";
import { Grid } from "@material-ui/core";
import { MyButton } from "./ForGotPasswordStyled";
import { isEmpty } from "lodash";
import { useForm } from "react-hook-form";
import CustomForm from "../../../utils/CustomForm.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ForGotPasswordPage = (props) => {
  const schema = yup.object().shape({
    email: yup.string().required(),
  });
  const [showCode, setShowCode] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [emailState, setEmailState] = useState("");
  const { register, handleSubmit, watch, errors, setValue } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const isErrors = isEmpty(errors);
  let email = watch("email");
  useEffect(() => {
    if (email && isErrors) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [errors, email]);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const forgotPasswordHandle = (data) => {
    setEmailState(data.email);
    setShowCode(false);
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
            {showCode ? (
              <form onSubmit={handleSubmit(forgotPasswordHandle)}>
                <>
                  <p className={classes.emailTitle}>Nhập Email của bạn</p>
                  <CustomForm
                    inputType="input"
                    className={classes.emailFormLogin}
                    nameInput="email"
                    name={register}
                    placeholder="Địa chỉ Email"
                  />
                  <MyButton
                    type="submit"
                    isDisabled={disabled}
                    disabled={disabled}
                  >
                    Lấy lại mật khẩu
                  </MyButton>
                </>
              </form>
            ) : (
              <CodePasswordPage email={emailState} />
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
const CodePasswordPage = (props) => {
  const [disabled, setDisabled] = useState(true);
  const schema = yup.object().shape({
    code: yup.string().required(),
  });
  const { register, handleSubmit, watch, errors, setValue } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  let code = watch("code");
  const isErrors = isEmpty(errors);

  useEffect(() => {
    if (code && isErrors) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [errors, code]);
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const getCodeHandle = (data) => {
    let paramUpdate = data;
    paramUpdate.email = props.email;
  };
  return (
    <>
      <form onSubmit={handleSubmit(getCodeHandle)}>
        {/* <p className={classes.emailTitle}>Nhập mã khôi phục <span style={{color: "#888E8A",fontSize : 14}}>(gửi qua tuannvadsg@gmail.com)</span></p> */}
        <p className={classes.emailTitle}>Nhập mã khôi phục</p>
        <CustomForm
          className={classes.emailFormLogin}
          nameInput="code"
          name={register}
          placeholder="VD: 84XCVJF94"
          inputType="input"
        />

        <MyButton type="submit" isDisabled={disabled} disabled={disabled}>
          Lấy lại mật khẩu
        </MyButton>
      </form>
    </>
  );
};
export { ForGotPasswordPage };
