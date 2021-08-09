import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BreadCrumb from "../../components/Client/BreadCrumb/BreadCrumb";
import { Grid } from "@material-ui/core";
import FilterItem from "../../components/Client/FilterItem/FilterItem";
import ListItemByTypeProduct from "../../components/Client/ListItemByTypeProduct/ListItemByTypeProduct";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/ListProductByTypeStyled";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import {
  useProductByCategory,
  getProductByCategory,
} from "../../hooks/useProductByCategory";
import { useRecoilValue } from "recoil";
import { filterState } from "../../lib/recoil-root";
import { getLayout } from "../../container/MainLayout";

const ListProductByType = (props) => {
  const useStyled = makeStyles(styles);
  const filter = useRecoilValue(filterState);
  const classes = useStyled();
  const router = useRouter();
  const {
    data: productByCate,
    isLoading,
    error,
    isSuccess,
  } = useProductByCategory(router.query.index, filter);

  return (
    <>
      <BreadCrumb listBreadCrumb={productByCate?.docs} />
      <div className={classes.main_list}>
        <Grid container className={classes.main_list_container} spacing={2}>
          <Grid item lg={3} md={3} className={classes.main_filter}>
            <FilterItem productByCate={productByCate?.docs} />
          </Grid>
          <Grid item lg={9} md={9} xs={12}>
            <ListItemByTypeProduct listProduct={productByCate} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
ListProductByType.getLayout = getLayout;

export async function getStaticPaths() {
  const res = await fetch(
    `https://staging-lereappserver.herokuapp.com/api/v1/categories`
  );
  const categories = await res.json();
  const paths = categories?.map((post) => ({
    params: { index: post._id },
  }));
  return { paths, fallback: "blocking" };
}
export async function getStaticProps({ params }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["categories", String(params.index)],
    getProductByCategory,
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

export default ListProductByType;
