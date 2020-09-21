import React from 'react';
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

const ProductDetail = () => {
    const useStyled = makeStyles((theme) => ({
        main_list: {

        },
      }));
    const classes = useStyled()
    const router = useRouter()
    console.log(router)
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
                <ProductDetailsInfo />
                <Line />
                <ProductDetailsContent content={content} />
                <Line />
                <ProductRelated />
            </div>
        </>
        
    );
};

export default ProductDetail;

export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
export async function getStaticPaths() {
  return {
    paths: [{ params: { product: "1" } }],
    fallback: true,
  };
}