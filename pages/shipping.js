import React from "react";
import { getLayout } from "../container/MainLayout";
import dynamic from "next/dynamic";

const Shipping = () => {
  const ShippingWithNoSSR = dynamic(
    () => import("../components/Client/Shipping/ShippingContainer"),
    { ssr: false }
  );
  return (
    <>
      <ShippingWithNoSSR />
    </>
  );
};
Shipping.getLayout = getLayout;

export default Shipping;
