import React, { useEffect } from "react";
import UploadProduct from "../components/Client/UploadProduct/UploadProduct";
import { useRecoilValue } from "recoil";
import { userState } from "../lib/recoil-root";
import { useRouter } from "next/router";
import { getLayout } from "../container/MainLayout";

const Upload_Product = () => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  useEffect(() => {
    if (user == "") router.push("/login");
  }, []);
  return (
    <>
      <UploadProduct />
    </>
  );
};
Upload_Product.getLayout = getLayout;

export default Upload_Product;
