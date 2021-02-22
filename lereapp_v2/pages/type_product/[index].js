import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BreadCrumb from "../../components/Client/BreadCrumb/BreadCrumb";
import { Grid } from "@material-ui/core";
import FilterItem from "../../components/Client/FilterItem/FilterItem";
import ListItemByTypeProduct from "../../components/Client/ListItemByTypeProduct/ListItemByTypeProduct";
import { makeStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "../../styles/ListProductByTypeStyled";
import { QueryClient,useQueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { queryClient } from "../_app";
import {
  useProductByCategory,
  getProductByCategory,
} from "../../hooks/useProductByCategory";
const ListProductByType = (props) => {
  const useStyled = makeStyles(styles);
  const [page, setPage] = useState(0);
  const [nameTypeProduct,setNameTypeProduct] = useState("")
  const classes = useStyled();
  const router = useRouter();
  let nameTypeProducts = [];
  const { data: productByCate, isLoading, error } = useProductByCategory(
    router.query.index,page
  );

  useEffect(async () => {
      await queryClient.prefetchQuery(["categoriesProduct",router.query.index, page], () =>
        useProductByCategory(router.query.index, page)
      );
  }, [page]);
  if (productByCate?.products?.length > 0) {
    nameTypeProducts = productByCate?.products.filter(
      (item) => `${parseInt(router.query.index)}` == parseInt(item._id)
    );
  }
  // let listBreadCrumb = []
  // if(nameTypeProduct){
  //   listBreadCrumb.push(nameTypeProduct[0]?.name)

  // }
  // console.log(nameTypeProduct[0]?.name)
  return (
    <>
      {/* <BreadCrumb
        listBreadCrumb={
          listBreadCrumb
        }
      /> */}
      <div className={classes.main_list}>
        <Grid container>
          <Grid item lg={3} md={3} className={classes.main_filter}>
            <FilterItem />
          </Grid>
          <Grid item lg={9} md={9} xs={12}>
            <ListItemByTypeProduct
              listProduct={productByCate}
              // typeProduct={
              //   nameTypeProduct.length > 0 ? nameTypeProduct[0].name : null
              // }
              page={(page) => setPage(page)}
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
    params: { index: post._id },
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
