// import React, { useState } from "react";
// import CollapseRadio from "../../../utils/CollapseRadio";
// import { price, places } from "../../../utils/FixedFilterItem";
// import CollapseCheckbox from "../../../utils/CollapseCheckBox";
// import { makeStyles } from "@material-ui/core/styles";
// import { useEffect } from "react";
// import styles from "./FilterItemMobileStyled";

// const FilterItemMobile = (props) => {
//   const [filter, setFilter] = useState({
//     grid: "",
//     limit: 6,
//     skip: 0,
//     filters: {
//       places: [],
//       price: [],
//     },
//   });
//   const [display, setDisplay] = useState(false);
//   useEffect(() => {
//     if (props.display) {
//       setDisplay(true);
//     }
//   }, [props.display]);
//   const useStyled = makeStyles(styles);
//   const classes = useStyled({
//     display : display
//   });
//   const handleFilters = (filters, cate) => {
//     const newFilter = { ...filter.filters };
//     newFilter[cate] = filters;

//     if (cate === "price") {
//       let priceValues = handlePrice(filters);
//       newFilter[cate] = priceValues;
//     }
//     // showFilteredResults(newFilter);
//     setFilter((preState) => ({
//       ...preState,
//       filters: newFilter,
//     }));
//   };
//   const handlePrice = (value) => {
//     const data = price;
//     let array = [];
//     for (let key in data) {
//       if (data[key]._id === parseInt(value, 10)) {
//         array = data[key].array;
//       }
//     }
//     return array;
//   };

//   //   const showFilteredResults = (filter) => {
//   //     props.dispatch(getProductToShop(0, layout.limit, filter)).then(() => {
//   //       setLayout((preState) => ({
//   //         ...preState,
//   //         skip: 0,
//   //       }));
//   //     });
//   //   };
//   const hideModel = () => {
//     setDisplay(false);
//     props.onChangeDisplay();
//   };
//   return (
//     <div className={classes.filter_main_mobile_background}>
//       <div className={classes.filter_main_mobile}>
//         <div className={classes.filter_main_mobileClose} onClick={() => hideModel()}>
//           X
//         </div>
//         <CollapseRadio
//           initState={true}
//           title="Khoảng giá"
//           list={price}
//           handleFilters={(filters) => handleFilters(filters, "price")}
//         />
//         <div style={{ height: 1, width: "55%", background: "#E7E9E8" }}></div>
//         <CollapseCheckbox
//           initState={true}
//           title="Địa điểm"
//           list={places}
//           handleFilters={(filters) => handleFilters(filters, "places")}
//         />
//       </div>
//     </div>
//   );
// };
// export default FilterItemMobile;
