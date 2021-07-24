import React from "react";
import { getLayout } from "../../../container/ProfileContainer";
import dynamic from 'next/dynamic'

const OrderLease = dynamic(
  () => import('../../../components/Client/OrderLease/OrderLease'),
  { ssr: false }
)
const Order = () => {
  return <OrderLease />;
};
Order.getLayout = getLayout;
export default Order;
