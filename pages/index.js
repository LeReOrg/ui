import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getCategories } from "../hooks/useCategories";
import HomePage from "../components/Client/Home/Home";
import { getLayout } from "../container/MainLayout";

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
Home.getLayout = getLayout;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("categories", getCategories);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
