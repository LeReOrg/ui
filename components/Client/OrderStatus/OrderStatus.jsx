import React from "react";
import { useRecoilValue } from "recoil";
import { useCancelOrder, useConfirmOrder } from "../../../hooks/useOrder";
import { userState } from "../../../lib/recoil-root";
import CardOrderItem from "../../../utils/CardOrderItem";
import { useRouter } from "next/router";
const OrderAllItems = ({ orders, customerTab }) => {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const user = useRecoilValue(userState);

  const { mutate: cancelOrder } = useCancelOrder();
  const { mutate: confirmOrder } = useConfirmOrder();

  const deleleOrder = (item) => {
    const params = {};
    params.orderId = item._id;
    params.token = user.token;
    cancelOrder(params);
    alert("Hủy đơn hàng thành công");
  };
  const confirmOrderHandle = (item) => {
    const params = {};
    params.orderId = item._id;
    params.token = user.token;
    confirmOrder(params);
    alert("Đơn hàng đã được xác nhận");
    refreshData();
  };
  const renderItems = () =>
    orders?.docs?.map((item) => (
      <CardOrderItem
        deleteOrder={(item) => deleleOrder(item)}
        confirmOrder={(item) => confirmOrderHandle(item)}
        customerTab={customerTab}
        key={item._id}
        item={item}
      />
    ));
  return <>{renderItems()}</>;
};
export default OrderAllItems;
