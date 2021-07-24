import React from "react";
import { getLayout } from "../container/MainLayout";
import dynamic from 'next/dynamic'

const UploadSuccessPage = dynamic(
  () => import('../components/Client/UploadSucessPage/UploadSucesPage'),
  { ssr: false }
)
function UploadSuccess() {
  return (
    <>
      <UploadSuccessPage />
    </>
  );
}
UploadSuccess.getLayout = getLayout;

export default UploadSuccess;
