import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import {useDispatch,useSelector} from 'react-redux';
import { googleSignInStart } from "../../../store/action/user_action";
 
const LoginPage = () => {

  const initialValues = {
    email: "",
    password: "",
  };
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const signInEmail = () => {
    dispatch(googleSignInStart())
  }
  const loginHandel = () => {
     
  };
  return (
    <div>
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
            <p>Email hoặc số điện thoại</p>
            <Field name="email" placeholder="Nhập Email hoặc số điện thoại" />
            <ErrorMessage name="email" />
            <p>Mật khẩu</p>
            <Field name="password" placeholder="Nhập mật khẩu" />
            <ErrorMessage name="password" />
            <button type="submit">Đăng nhập</button>
          </Form>
        )}
      </Formik>
      <div onClick={signInEmail}>signInWithEmail</div>
    </div>
  );
};

export default LoginPage;
