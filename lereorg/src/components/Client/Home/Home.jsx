import React, { useEffect } from "react";
import ProductType from "../ProductType/ProductType";
import Info from "../Info/Info";
import InterestedItem from "../InterestedItem/InterestedItem";
import LoadMoreItem from "../InterestedItem/LoadMoreItem";
import SlideBackground from "../SlideBackground/SlideBackground";

const Home = (props) => {
  const loadMore = () => {
    // let skip = layout.skip + layout.limit;
    // props.dispatch(getProductToShop(
    //     skip,
    //     layout.limit,
    //     layout.filters,
    //     props.products.toShop
    // )).then(() => {
    //     setLayout((preState) => ({
    //         ...preState,
    //         skip : skip
    //        }))
    // })
    alert("load")
}
  return (
    <>
     <SlideBackground />
      <div style={{ width: "90%", margin: "0 auto" }}>
       
        <ProductType />
        <Info /> 
        <InterestedItem />
        <LoadMoreItem  loadMore = {() => loadMore()}/>
      </div>
    </>
  );
};
export default Home;
