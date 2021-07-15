import React from "react";
import CardOrderItem from "../../../utils/CardOrderItem";

const OrderCancel = ({ orders }) => {
  console.log(orders);
  const deleleOrder = (item) => {
    const params = {};
    params.orderId = item._id;
    params.token = user.token;
    mutate(params);
    alert("Hủy đơn hàng thành công");
  };
  const renderItems = () =>
    orders?.docs?.map((item) => <CardOrderItem key={item._id} item={item} />);
  return <>{renderItems()}</>;
};
export default OrderCancel;
