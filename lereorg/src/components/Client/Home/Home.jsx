import React, { useEffect } from "react";
import ProductType from "../ProductType/ProductType";
import Info from "../Info/Info";
const Home = (props) => {
  return (
    <>
      <div style={{ width: "95%", margin: "0 auto" }}>
        <ProductType />
        <Info /> 
      </div>
    
      {/* </div> */}
    </>
  );
};
export default Home;
