import React from "react";
import SignUpPage from "../components/Client/SignUp/SignUp";
import { getLayout } from "../container/MainLayout";

const Signup = () => {
  return (
    <>
      <SignUpPage />
    </>
  );
};
Signup.getLayout = getLayout;

export default Signup;
