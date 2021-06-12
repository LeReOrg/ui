import React, { useEffect } from "react";
import UploadProduct from "../components/Client/UploadProduct/UploadProduct";
import { useRecoilValue } from "recoil";
import { userState } from "../lib/recoil-root";
import { useRouter } from "next/router";
const Upload_Product = () => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  console.log(user);
  useEffect(() => {
    if (user == "") router.push("/login");
  }, []);
  return (
    <>
      <UploadProduct />
    </>
  );
};

export default Upload_Product;
