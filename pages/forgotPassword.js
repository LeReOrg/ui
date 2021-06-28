import React from "react";
import { ForGotPasswordPage } from "../components/Client/ForGotPassword/ForGotPassword";
import { getLayout } from "../container/MainLayout";

const ForgotPassWord = () => {
  return (
    <>
      <ForGotPasswordPage />
    </>
  );
};
ForgotPassWord.getLayout = getLayout;

export default ForgotPassWord;
