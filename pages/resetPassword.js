import React from "react";
import { getLayout } from "../container/MainLayout";
import dynamic from 'next/dynamic'

const ResetPasswordPage = dynamic(
  () => import('../components/Client/ForGotPassword/ResetPassword'),
  { ssr: false }
)
const ResetPassWord = () => {
  return (
    <>
      <ResetPasswordPage />
    </>
  );
};
ResetPassWord.getLayout = getLayout;

export default ResetPassWord;
