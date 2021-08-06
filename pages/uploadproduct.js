import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../lib/recoil-root";
import { useRouter } from "next/router";
import { getLayout } from "../container/MainLayout";
import dynamic from "next/dynamic";

const Upload_Product = () => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  useEffect(() => {
    if (user == "") router.push("/login");
  }, []);
  const UploadProductWithNoSSR = dynamic(
    () => import("../components/Client/UploadProduct/UploadProduct"),
    { ssr: false }
  );
  return (
    <>
      <UploadProductWithNoSSR />
    </>
  );
};
Upload_Product.getLayout = getLayout;

export default Upload_Product;
