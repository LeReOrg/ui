import React, { useEffect } from "react";
import ProductType from "../ProductType/ProductType";
import Info from "../Info/Info";
const Home = (props) =>{
    return (
        <>
            <div style={{ width: "95%", margin: "40px auto 0"}}>
             <ProductType />
            </div>

            {/* <Info />  */}
            {/* </div> */}
           
        </>
    );
}
export default Home;