import React, { useEffect } from "react";
import { useRouter } from "next/router";
import BreadCrumb from "../../components/Client/BreadCrumb/BreadCrumb";
import { Grid } from "@material-ui/core";
import FilterItem from "../../components/Client/FilterItem/FilterItem";
import ListItemByTypeProduct from "../../components/Client/ListItemByTypeProduct/ListItemByTypeProduct";
import { makeStyles } from "@material-ui/styles";
import { getProductByCategory  } from "../../store/action/products_action";
import { getCategories  } from "../../store/action/categories_action";
import { wrapper } from "../../store/store";
import { END } from "redux-saga";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch,useSelector } from "react-redux";
import styles from "../../styles/ListProductByTypeStyled";

const ListProductByType = (props) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const router = useRouter();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductByCategory(router.query.index));
  }, [dispatch]);

  let nameTypeProduct = [];

  const getListProductByType  = useSelector(state => state.products.products)
  if(getListProductByType.length > 0){
    nameTypeProduct =  getListProductByType.filter(item => `${router.query.index}` == parseInt(item.id))
  }

  return (
    <>
  
      <BreadCrumb
        activeBread={
          nameTypeProduct.length > 0 ? nameTypeProduct[0].name : null
        }
        id={nameTypeProduct.length > 0 ? nameTypeProduct[0].id : null}
      />
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
export const getStaticProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    store.dispatch(getProductByCategory(params.index));
     store.dispatch(END);
    //  await store.sagaTask.toPromise();
  }
);

export async function getStaticPaths() {
   // Call an external API endpoint to get posts
   const res = await fetch('https://pacific-ravine-33365.herokuapp.com/category/getCategory');
   const categories = await res.json()
  //  // Get the paths we want to pre-render based on posts
   const paths = categories.map((post) => ({
     params: { index: post.id },
   }))
   return { paths, fallback: false }

}
export default ListProductByType;
