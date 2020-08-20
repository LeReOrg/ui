import React, { useEffect } from "react";
import { useRouter } from "next/router";
import BreadCrumb from "../../components/Client/BreadCrumb/BreadCrumb";
import { Grid } from "@material-ui/core";
import FilterItem from "../../components/Client/FilterItem/FilterItem";
import ListItemByTypeProduct from "../../components/Client/ListItemByTypeProduct/ListItemByTypeProduct";
import { makeStyles } from "@material-ui/styles";
import { getProductByCategory } from "../../store/action/categories_action";
import { wrapper } from "../../store/store";
import { END } from "redux-saga";
import { useDispatch, connect } from "react-redux";

const ListProductByType = () => {
  const useStyled = makeStyles((theme) => ({
    main_list: {
      width: "92%",
      margin: "40px auto",
      [theme.breakpoints.down("sm")]: {
        margin: "0px auto",
      },
    },
    main_filter: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));
  const classes = useStyled();
  const router = useRouter();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch.getProductByCategory(router.query.type_product)
  // },[dispatch])
  return (
    <>
      <BreadCrumb
        activeBread={
          router.query.type_product !== "undefined"
            ? router.query.type_product
            : null
        }
      />
      <div className={classes.main_list}>
        <Grid container>
          <Grid item lg={3} md={3} className={classes.main_filter}>
            <FilterItem />
          </Grid>
          <Grid item lg={9} md={9} xs={12}>
            <ListItemByTypeProduct
              typeProduct={
                router.query.type_product !== "undefined"
                  ? router.query.type_product
                  : null
              }
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default ListProductByType;
export const getStaticProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    store.dispatch(getProductByCategory(params.type_product));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);
export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { type_product: "1" } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
}
