import React, { useEffect,useState } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/styles";
import Line from "../../utils/Line";
import BreadCrumb from "../../components/Client/BreadCrumb/BreadCrumb";
import ProductDetailsInfo from "../../components/Client/ProductDetails/ProductDetailsInfo";
import ProductDetailsContent from "../../components/Client/ProductDetails/ProductDetailsContent";
import ProductRelated from "../../components/Client/ProductDetails/ProductRelated";
import { content } from "../../utils/FixedContentItem";
import { getProductDetails, useProductDetails } from "../../hooks/useProduct";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
// import { useDispatch } from 'react-redux';
// import { getProductDetail } from '../../store/action/products_action';

const ProductDetail = (props) => {
  // const dispatch = useDispatch();
  const router = useRouter();
  // useEffect(() => {
  //   dispatch(getProductDetail(router.query.product))
  // },[])
  // const [productDetails,setProductDetails] =useState([]);
  const useStyled = makeStyles((theme) => ({
    main_list: {},
  }));
  const classes = useStyled();
  const { data: productDetail, isLoading, error } = useProductDetails(
    router.query.product
  );
  if (!isLoading) {
    
  }
  return (
    <>
      <BreadCrumb
        activeBread={
          router.query.index !== "undefined" ? router.query.index : null
        }
      />
      <div className={classes.main_list}>
        <ProductDetailsInfo detailsProduct={productDetail ? productDetail : null } />
        <Line />
        <ProductDetailsContent content={content} />
        <Line />
        <ProductRelated />
      </div>
    </>
  );
};

export default ProductDetail;

export async function getStaticPaths() {
  // const res = await fetch(
  //   "https://pacific-ravine-33365.herokuapp.com/category/getCategory"
  // );
  // const categories = await res.json();
  // const paths = categories.map((post) => ({
  //   params: { index: post.id },
  // }));
  // return { paths, fallback: false };
  const paths = [{ params: { product: "1" } }, { params: { product: "2" } }];
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

// export async function getStaticProps({ params }) {
//   const res = await fetch(`https://pacific-ravine-33365.herokuapp.com/product/getProductById/${params.product}`)
//   const detailsProduct = await res.json()

//     return {
//       props: {detailsProduct}, // will be passed to the page component as props
//     }
//   }
// export async function getStaticPaths() {
// const res = await fetch(`https://pacific-ravine-33365.herokuapp.com/product/getProductById/${params.id}`)
// const detailsProduct = await res.json();
// const paths = detailsProduct.map((post) => ({
//   params: { product: post.id },
// }))
//   const  paths =  [
//     { params: { product: '1' } },
//     { params: { product: '2' } }
//   ]
//   return { paths, fallback: false }

// }
