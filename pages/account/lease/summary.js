import React from "react";
import { getLayout } from "../../../container/ProfileContainer";
import dynamic from 'next/dynamic'

const SummaryPage = () => {
  const SummaryPageWithNoSSR = dynamic(
    () => import("../../../components/Client/Summary/Summary"),
    { ssr: false }
  );
  return (
    <>
      <SummaryPageWithNoSSR />
    </>
  );
};

SummaryPage.getLayout = getLayout;

export default SummaryPage;
