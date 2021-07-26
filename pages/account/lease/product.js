import React from "react";
import { getLayout } from "../../../container/ProfileContainer";
import dynamic from 'next/dynamic'

const Products = dynamic(
  () => import('../../../components/Client/Products/Products'),
  {ssr : false}
 
)
const Product = () => {
  return <Products />;
};
Product.getLayout = getLayout;
export default Product;
