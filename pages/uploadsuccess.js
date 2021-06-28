import React from "react";
import UploadSuccessPage from "../components/Client/UploadSucessPage/UploadSucesPage";
import { getLayout } from "../container/MainLayout";
function UploadSuccess() {
  return (
    <>
      <UploadSuccessPage />
    </>
  );
}
UploadSuccess.getLayout = getLayout;

export default UploadSuccess;
