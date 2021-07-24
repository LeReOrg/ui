import React from "react";
import { getLayout } from "../container/MainLayout";
import dynamic from 'next/dynamic'

const SignUpPage = dynamic(
  () => import('../components/Client/SignUp/SignUp'),
  { ssr: false }
)
const Signup = () => {
  return (
    <>
      <SignUpPage />
    </>
  );
};
Signup.getLayout = getLayout;

export default Signup;
