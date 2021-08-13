import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { changeAddressState, userState } from "../lib/recoil-root";
import { getLayout } from "../container/MainLayout";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Shipping = () => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  const [changeAddress, setChangeAddress] = useRecoilState(changeAddressState);
  useEffect(() => {
    if (user === "") router.push("/login");
    return () => {
      setChangeAddress(false);
    };
  }, []);
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
