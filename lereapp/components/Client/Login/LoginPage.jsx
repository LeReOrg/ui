import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import {useDispatch,useSelector, connect} from 'react-redux';
import { googleSignInStart , faceBookSignInStart } from "../../../store/action/user_action";
 import styles from "./LoginPageStyled";

const LoginPage = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };
  console.log(props.user);
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
  const loginHandel = () => {};
  return (
    <div className={classes.main_page_login}>
      <div className={classes.main_page_content}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => loginHandel(values)}
          validationSchema={object({
            password: string().required("Password is required").min(6).max(100),
            email: string().required("Email is required").min(10).max(100),
          })}
        >
          {({ values, errors, handleChange }) => (
            <Form>
              <p className={classes.emailTitle}>Email hoặc số điện thoại</p>
              <Field
                className={classes.emailForm}
                name="email"
                placeholder="Nhập Email hoặc số điện thoại"
              />
              <ErrorMessage name="email" />
              <p className={classes.passwordTitle}>Mật khẩu</p>
              <Field
                className={classes.passwordFormLogin}
                name="password"
                placeholder="Nhập mật khẩu"
              />
              <ErrorMessage name="password" />
              <br />
              <button type="submit">Đăng nhập</button>
            </Form>
          )}
        </Formik>
        <div onClick={signInEmail}>signInWithEmail</div>
        <div onClick={signInFaceBook}>signInWithFacebook</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(LoginPage);
