import React from "react";
import CustomerDetail from "../../../../components/Client/Customer/CustomerDetail";
import { getLayout } from "../../../../container/ProfileContainer";

const OrderDetail = () => {
  return <CustomerDetail />;
};
OrderDetail.getLayout = getLayout;

export default OrderDetail;
