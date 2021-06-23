import React from "react";
import CollapseRadio from "../../../utils/CollapseRadio";
import { price, places } from "../../../utils/FixedFilterItem";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import CollapseCheckbox from "../../../utils/CollapseCheckBox";
import styles from "./FilterItemMobileStyled";

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
  const useStyled = makeStyles(styles);
  const classes = useStyled();
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
  return (
    <div className={classes.filter_main_desktop}>
      <CollapseRadio
        initState={true}
        title="Khoảng giá"
        list={price}
        handleFilters={(filters) => handleFilters(filters, "price")}
      />
      <div style={{ height: 1, background: "#E7E9E8" }}></div>
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
