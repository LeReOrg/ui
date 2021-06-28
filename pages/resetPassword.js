import React from "react";
import ResetPasswordPage from "../components/Client/ForGotPassword/ResetPassword";
import { getLayout } from "../container/MainLayout";

const ResetPassWord = () => {
  return (
    <>
      <ResetPasswordPage />
    </>
  );
};
ResetPassWord.getLayout = getLayout;

export default ResetPassWord;
