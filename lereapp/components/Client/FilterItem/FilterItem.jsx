import React from "react";
import CollapseRadio from "../../../utils/CollapseRadio";
import { price, places } from "../../../utils/FixedFilterItem";
import { useState } from "react";
import CollapseCheckbox from "../../../utils/CollapseCheckBox";
const FilterItem = (props) => {
 const [filter, setFilter] = useState({
   grid: "",
   limit: 6,
   skip: 0,
   filters: {
     places: [],
     price: [],
   },
 });
  const handleFilters = (filters, cate) => {
    const newFilter = { ...filter.filters };
    newFilter[cate] = filters;

    if (cate === "price") {
      let priceValues = handlePrice(filters);
      newFilter[cate] = priceValues;
    }
    // showFilteredResults(newFilter);
    setFilter((preState) => ({
      ...preState,
      filters: newFilter,
    }));
  };
  const handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };
  console.log(filter)
//   const showFilteredResults = (filter) => {
//     props.dispatch(getProductToShop(0, layout.limit, filter)).then(() => {
//       setLayout((preState) => ({
//         ...preState,
//         skip: 0,
//       }));
//     });
//   };
  return (
    <div>
      <CollapseRadio
        initState={true}
        title="Khoảng giá"
        list={price}
        handleFilters={(filters) => handleFilters(filters, "price")}
      />
      <CollapseCheckbox
        initState={true}
        title="Địa điểm"
        list={places}
        handleFilters={(filters) => handleFilters(filters, "places")}
      />
    </div>
  );
};
export default FilterItem;
