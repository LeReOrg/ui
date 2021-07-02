import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import styles from "./CustomerStyled";
import { MyButton } from "../Login/LoginPageStyled";
import { userState, errorCodeState } from "../../../lib/recoil-root";
import { useRecoilState } from "recoil";
import { Grid, Box } from "@material-ui/core";
import * as yup from "yup";

// import { MyButton } from "./SignUpPageStyled";
import Link from "next/link";
import { isEmpty } from "lodash";
import CustomForm from "../../../utils/CustomForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const schema = yup.object().shape({
  email: yup.string().required().email().max(100),
  password: yup.string().required().min(8).max(100),
  phoneNumber: yup.string().min(10).max(100),
  displayName: yup.string().required().max(100),
});
const CustomerInfo = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [currentUser, setcurrentUser] = useRecoilState(userState);
  // const [errorCode, setErrorCode] = useRecoilState(errorCodeState);
  // const { mutate, data, isLoading } = useSignUp();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

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
  const updateUserHandler = async (data) => {
    // mutate(data);
  };
  return (
    <div className={classes.customerInfoContainer}>
      <form onSubmit={handleSubmit(updateUserHandler)}>
        <Box className={classes.customerInfoRow}>
          <p className={classes.emailTitle}>Họ và tên</p>
          <CustomForm
            inputType="input"
            className={classes.emailFormLogin}
            nameInput="displayName"
            name={register}
            placeholder="Nhập họ và tên đầy đủ"
          />
        </Box>
        <p style={{ color: "red", fontStyle: "italic" }}>
          {errors.displayName?.message}
        </p>
        <Box className={classes.customerInfoRow}>
          <p className={classes.emailTitle}>Địa chỉ Email</p>
          <CustomForm
            inputType="input"
            className={classes.emailFormLogin}
            name={register}
            placeholder="Nhập Email"
            nameInput="email"
          />
        </Box>

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
        {/* {errorCode.code === 2 && (
            <p style={{ color: "red", fontStyle: "italic" }}>
              Email đã tồn tại
            </p>
          )} */}
        {/* <MyButton type="submit" isDisabled={disabled} disabled={disabled}>
            Tạo tài khoản
          </MyButton> */}
      </form>
    </div>
  );
};

export default CustomerInfo;
