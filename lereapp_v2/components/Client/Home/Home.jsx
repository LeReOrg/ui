import React, { useEffect } from "react";
import ProductType from "../ProductType/ProductType";
import Info from "../Info/Info";
import MoreInfo from "../MoreInfo/MoreInfo";
import InterestedItem from "../InterestedItem/InterestedItem";
import LoadMoreItem from "../InterestedItem/LoadMoreItem";
import SlideBackground from "../SlideBackground/SlideBackground";
const HomePage = (props) => {
 


  return (
    <>
      <SlideBackground />
      <div style={{ width: "95%", margin: "0 auto" }}>
        <ProductType />
        <Info />
        <InterestedItem />
        {/* <LoadMoreItem loadMore={() => loadMore()} /> */}
        <MoreInfo />
      </div>
    </>
  );
};
export default HomePage;
