import React from "react";
import dynamic from "next/dynamic";
import { getLayout } from "../container/MainLayout";

const Payment = () => {
  const PaymentWithNoSSR = dynamic(
    () => import("../components/Client/Payment/PaymentContainer"),
    { ssr: false }
  );
  return (
    <>
      <PaymentWithNoSSR />
    </>
  );
};
Payment.getLayout = getLayout;
export default Payment;
