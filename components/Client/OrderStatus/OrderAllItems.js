import React from "react";
import CardOrderItem from "../../../utils/CardOrderItem";

const OrderAllItems = () => {
  const renderItems = () => <CardOrderItem />;
  return <>{renderItems()}</>;
};
export default OrderAllItems;
