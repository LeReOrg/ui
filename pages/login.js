import React from "react";
import LoginPage from "../components/Client/Login/LoginPage";
import { getLayout } from "../container/MainLayout";

const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};
Login.getLayout = getLayout;

export default Login;
