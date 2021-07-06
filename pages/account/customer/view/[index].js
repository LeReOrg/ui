import React from "react";
import OrderDetailItem from "../../../../components/Client/Customer/OrderDetailItem";
import { getLayout } from "../../../../container/ProfileContainer";
import { useOrderLessorDetail } from "../../../../hooks/useOrder";
import { useRouter } from "next/router";

const OrderDetail = () => {
  const router = useRouter();
  const { data: orderDetail, isLoading, error } = useOrderLessorDetail(
    router.query.index
  );
  console.log(orderDetail);
  return <OrderDetailItem orderDetail={orderDetail} />;
};
OrderDetail.getLayout = getLayout;

export default OrderDetail;
