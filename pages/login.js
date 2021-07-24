import React from "react";
import { getLayout } from "../container/MainLayout";
import dynamic from 'next/dynamic'

const LoginPage = dynamic(
  () => import('../components/Client/Login/LoginPage'),
  { ssr: false }
)
const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};
Login.getLayout = getLayout;

export default Login;
