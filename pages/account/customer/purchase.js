import React from "react";
import { getLayout } from "../../../container/ProfileContainer";
import dynamic from 'next/dynamic'

const CustomerHistory = dynamic(
  () => import('../../../components/Client/Customer/CustomerHistory'),
  { ssr: false }
)
const Purchase = () => {
  return <CustomerHistory />;
};
Purchase.getLayout = getLayout;
export default Purchase;
