import React from "react";
import CardOrderItem from "../../../utils/CardOrderItem";

const OrderAllItems = ({ orders }) => {
  console.log(orders);
  const renderItems = () =>
    orders?.docs?.map((item) => <CardOrderItem key={item._id} item={item} />);
  return <>{renderItems()}</>;
};
export default OrderAllItems;
