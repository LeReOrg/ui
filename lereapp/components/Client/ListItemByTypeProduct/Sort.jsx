import React, { useState, useEffect } from "react";
import { sort } from "../../../utils/FixedFilterItem";
import SortProduct from "../../../utils/SortProduct";


 const Sort = (props) => {
   const [stateCollapse, setStateCollapse] = useState(false);
   useEffect(() => {
     if (props.initState) {
       setStateCollapse(true);
     }
   }, []);
     const handleClick = () => {
       setStateCollapse((preState) => ({
         ...preState,
         open: !stateCollapse.open,
       }));
     };
   return (
     <SortProduct
       list={sort}
     />
   );
 };
export default Sort;