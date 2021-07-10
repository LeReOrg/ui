import React from "react";
import OrderDetailItem from "../../../../components/Client/Customer/OrderDetailItem";
import { getLayout } from "../../../../container/ProfileContainer";
import { getOrderLessorDetail } from "../../../../hooks/useOrder";
import { useRouter } from "next/router";
import { useOrderLessorDetail } from "../../../../hooks/useOrder";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
const OrderDetail = () => {
  const router = useRouter();
  const { data: orderDetail, isLoading, error } = useOrderLessorDetail(
    router.query.index
  );
  return <OrderDetailItem orderDetail={orderDetail} />;
};
OrderDetail.getLayout = getLayout;

export async function getStaticPaths() {
  const res = await fetch(
    `https://staging-lereappserver.herokuapp.com/api/v1/orders`
  );
  const categories = await res.json();
  const paths = categories?.docs.map((post) => ({
    params: { index: post._id },
  }));
  return { paths, fallback: "blocking" };
}
export async function getStaticProps({ params }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["orderLessorDetail", String(params.index)],
    getOrderLessorDetail,
    {
      staleTime: 2000,
    }
  );
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 10,
  };
}
export default OrderDetail;
