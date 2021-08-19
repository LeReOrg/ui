import React from "react";
import { getLayout } from "../container/MainLayout";
import dynamic from "next/dynamic";
const CustomerMobileWithNoSSR = dynamic(
  () => import("../components/Client/Customer/CustomerMobile"),
  { ssr: false }
);
const ForgotPassWord = () => {
  return (
    <>
      <CustomerMobileWithNoSSR />
    </>
  );
};
ForgotPassWord.getLayout = getLayout;

export default ForgotPassWord;
