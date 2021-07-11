import React from "react";
import { getLayout } from "../../../container/ProfileContainer";
import OrderLease from "../../../components/Client/OrderLease/OrderLease";
const Order = () => {
  return <OrderLease />;
};
Order.getLayout = getLayout;
export default Order;
