import React from "react";
import { useRecoilValue } from "recoil";
import { useCancelOrder } from "../../../hooks/useOrder";
import { userState } from "../../../lib/recoil-root";
import CardOrderItem from "../../../utils/CardOrderItem";

const OrderAllItems = ({ orders }) => {
  console.log(orders);

  const user = useRecoilValue(userState);

  const { mutate, isLoading, isSuccess } = useCancelOrder();
  const deleleOrder = (item) => {
    const params = {};
    params.orderId = item._id;
    params.token = user.token;
    mutate(params);
    alert("Hủy đơn hàng thành công");
  };
  const renderItems = () =>
    orders?.docs?.map((item) => (
      <CardOrderItem
        deleteOrder={(item) => deleleOrder(item)}
        key={item._id}
        item={item}
      />
    ));
  return <>{renderItems()}</>;
};
export default OrderAllItems;
