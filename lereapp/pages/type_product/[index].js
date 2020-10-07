import React, { useEffect } from "react";
import { useRouter } from "next/router";
import BreadCrumb from "../../components/Client/BreadCrumb/BreadCrumb";
import { Grid } from "@material-ui/core";
import FilterItem from "../../components/Client/FilterItem/FilterItem";
import ListItemByTypeProduct from "../../components/Client/ListItemByTypeProduct/ListItemByTypeProduct";
import { makeStyles } from "@material-ui/styles";
import { getProductByCategory } from "../../store/action/products_action";
import { wrapper } from "../../store/store";
import { END } from "redux-saga";
import { useDispatch,useSelector } from "react-redux";

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
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductByCategory(router.query.index));
  }, []);
  let nameTypeProduct = [];
  const getListProductByType  = useSelector(state => state.products.products)
  if(getListProductByType.length > 0){
    nameTypeProduct =  getListProductByType.filter(item => `${router.query.index}` == parseInt(item.id))
  }

  return (
    <>
      <BreadCrumb
        activeBread={
          nameTypeProduct.length > 0
            ? nameTypeProduct[0].name
            : null
        }
        id = { nameTypeProduct.length > 0
          ? nameTypeProduct[0].id
          : null}
      />
      <div className={classes.main_list}>
        <Grid container>
          <Grid item lg={3} md={3} className={classes.main_filter}>
            <FilterItem />
          </Grid>
          <Grid item lg={9} md={9} xs={12}>
            <ListItemByTypeProduct
            listProduct = {getListProductByType}
              typeProduct={
                nameTypeProduct.length > 0
            ? nameTypeProduct[0].name
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
    store.dispatch(getProductByCategory(params.index));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);
export async function getStaticPaths() {
  return {
    paths: [{ params: { index: "1" } }],
    fallback: true,
  };
}
