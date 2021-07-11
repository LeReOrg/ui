import React from "react";
import Products from "../../../components/Client/Products/Products";
import { getLayout } from "../../../container/ProfileContainer";

const Product = () => {
  return <Products />;
};
Product.getLayout = getLayout;
export default Product;
