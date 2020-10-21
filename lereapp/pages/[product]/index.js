import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Line from "../../utils/Line";
import BreadCrumb from "../../components/Client/BreadCrumb/BreadCrumb";
import ProductDetailsInfo from "../../components/Client/ProductDetails/ProductDetailsInfo";
import ProductDetailsContent from "../../components/Client/ProductDetails/ProductDetailsContent";
import ProductRelated from "../../components/Client/ProductDetails/ProductRelated";
import { content } from "../../utils/FixedContentItem";
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/action/cart_actions';
import { getProductDetail } from '../../store/action/products_action';

const ProductDetail = ({detailsProduct}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
      dispatch(getProductDetail(router.query.index))
    },[])
    const useStyled = makeStyles((theme) => ({
        main_list: {

        },
      }));
      const classes = useStyled();

    return (
        <>
            <BreadCrumb
                activeBread={
                router.query.index !== "undefined"
                    ? router.query.index
                    : null
                }
            />
            <div className={classes.main_list}>                
                <ProductDetailsInfo detailsProduct={detailsProduct} />
                <Line />
                <ProductDetailsContent content={content} />
                <Line />
                <ProductRelated />
            </div>
        </>
        
    );
};

export default ProductDetail;

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pacific-ravine-33365.herokuapp.com/product/getProductById/${params.product}`)
  const detailsProduct = await res.json()

    return {
      props: {detailsProduct}, // will be passed to the page component as props 
    }
  }
export async function getStaticPaths() {  
  // const res = await fetch(`https://pacific-ravine-33365.herokuapp.com/product/getProductById/${params.id}`)
  // const detailsProduct = await res.json();
  // const paths = detailsProduct.map((post) => ({
  //   params: { product: post.id },
  // }))
  const  paths =  [
    { params: { product: '1' } },
    { params: { product: '2' } }
  ]
  return { paths, fallback: false }

}