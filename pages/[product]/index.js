import React, { useEffect,useState } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/styles";
import Line from "../../utils/Line";
import BreadCrumb from "../../components/Client/BreadCrumb/BreadCrumb";
import ProductDetailsInfo from "../../components/Client/ProductDetails/ProductDetailsInfo";
import ProductDetailsContent from "../../components/Client/ProductDetails/ProductDetailsContent";
import ProductRelated from "../../components/Client/ProductDetails/ProductRelated";
import { getProductDetails, useProductDetails } from "../../hooks/useProduct";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";


const ProductDetail = (props) => {
  const router = useRouter();
  
  const useStyled = makeStyles((theme) => ({
    main_list: {},
  }));
  const classes = useStyled();
  const { data: productDetail, isLoading, error } = useProductDetails(
    router.query.product
  );
  let breadCrumbArray = [];
  if(productDetail) {
    let categeryItem = {
      id : productDetail[0]?.category?._id,
      itemName : productDetail[0]?.category?.name
    }
    let productItem = {
      id : productDetail[0]?.id,
      itemName : productDetail[0]?.name

    }
    breadCrumbArray.push(categeryItem)
    breadCrumbArray.push(productItem)

  }
  return (
    <>
      <BreadCrumb listBreadCrumb = {breadCrumbArray}  />
      <div className={classes.main_list}>
        <ProductDetailsInfo
          detailsProduct={productDetail ? productDetail : null}
        />
        <Line />
        <ProductDetailsContent  detailsProduct={productDetail ? productDetail : null} />
        <Line />
        <ProductRelated />
      </div>
    </>
  );
};

export default ProductDetail;

export async function getStaticPaths() {
  const res = await fetch(
    "http://pacific-ravine-33365.herokuapp.com/product/getAllProduct"
  );
  const categories = await res.json();
  const paths = categories.map((post) => ({
    params: { product: post.id },
  }));
  return { paths, fallback: false };

}
export async function getStaticProps({ params }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["product", String(params.product)],
    getProductDetails,
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
