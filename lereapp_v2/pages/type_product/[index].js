import React, { useEffect } from "react";
import { useRouter } from "next/router";
import BreadCrumb from "../../components/Client/BreadCrumb/BreadCrumb";
import { Grid } from "@material-ui/core";
import FilterItem from "../../components/Client/FilterItem/FilterItem";
import ListItemByTypeProduct from "../../components/Client/ListItemByTypeProduct/ListItemByTypeProduct";
import { makeStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "../../styles/ListProductByTypeStyled";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import {
  getProductByCategory,
  prefetchProductByCate,
  useProductByCategory,
} from "../../hooks/useProductByCategory";
const ListProductByType = (props) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const router = useRouter();
  let nameTypeProduct = [];
  const { data: productByCate, isLoading, error } = useProductByCategory(
    router.query.index
  );
  let getListProductByType = [];
  if (!isLoading) {
    getListProductByType = productByCate;
  }
  if (getListProductByType.length > 0) {
    nameTypeProduct = getListProductByType.filter(
      (item) => `${router.query.index}` == parseInt(item.id)
    );
  }

  return (
    <>
      {/* <BreadCrumb
        activeBread={
          nameTypeProduct.length > 0 ? nameTypeProduct[0].name : null
        }
        id={nameTypeProduct.length > 0 ? nameTypeProduct[0].id : null}
      /> */}
      <div className={classes.main_list}>
        <Grid container>
          <Grid item lg={3} md={3} className={classes.main_filter}>
            <FilterItem />
          </Grid>
          <Grid item lg={9} md={9} xs={12}>
            <ListItemByTypeProduct
              listProduct={getListProductByType}
              typeProduct={
                nameTypeProduct.length > 0 ? nameTypeProduct[0].name : null
              }
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export async function getStaticPaths() {
  const res = await fetch(
    "https://pacific-ravine-33365.herokuapp.com/category/getCategory"
  );
  const categories = await res.json();
  const paths = categories.map((post) => ({
    params: { index: post.id },
  }));
  return { paths, fallback: false };
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
  };
}

export default ListProductByType;
