import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

const SignUpPage = () => {
  const initialValues = {
    email: "",
    fullName: "",
    telephone: "",
    password: "",
    repassword: "",
  };
  const signUpHandle = () => {};
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => signUpHandle(values)}
        validationSchema={object({
          fullName: string().required("FullName is required").min(6).max(100),
          email: string().required("Email is required").min(10).max(100),
          password: string().required("Password is required").min(6).max(100),
          telephone: string()
            .required("Telephone is required")
            .min(10)
            .max(100),
          repassword: string()
            .required("Repassword is required")
            .min(10)
            .max(100),
        })}
      >
        {({ values, errors, handleChange }) => (
          <Form>
            <p>Họ và tên</p>

            <Field name="fullName" placeholder=" Nhập họ và tên đầy đủ" />
            <ErrorMessage name="fullName" />
            <p>Địa chỉ Email</p>

            <Field name="email" placeholder="Nhập địa chỉ Email" />
            <ErrorMessage name="email" />
            <p>Số điện thoại</p>
            <Field name="telephone" placeholder="Nhập số điện thoại" />
            <ErrorMessage name="telephone" />
            <p>Nhập mật khẩu</p>
            <Field name="password" placeholder="Nhập mật khẩu" />
            <ErrorMessage name="password" />
            <p>Nhập lại mật khẩu</p>
            <Field name="repassword" placeholder="Nhập lại mật khẩu" />
            <ErrorMessage name="repassword" />
            <button type="submit">Đăng ký</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpPage;
