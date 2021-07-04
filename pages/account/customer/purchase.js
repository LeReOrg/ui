import React from "react";
import CustomerHistory from "../../../components/Client/Customer/CustomerHistory";
import { getLayout } from "../../../container/ProfileContainer";

const Purchase = () => {
  return <CustomerHistory />;
};
Purchase.getLayout = getLayout;
export default Purchase;
