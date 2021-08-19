import React from "react";
import { getLayout } from "../container/MainLayout";
import dynamic from "next/dynamic";

const ForgotPassWordWithNoSSR = dynamic(
  () => import("../components/Client/ForGotPassword/ForGotPassword"),
  { ssr: false }
);
const ForgotPassWord = () => {
  return (
    <>
      <ForgotPassWordWithNoSSR />
    </>
  );
};
ForgotPassWord.getLayout = getLayout;

export default ForgotPassWord;
