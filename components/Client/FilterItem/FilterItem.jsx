import React, { useState, useEffect } from "react";
import CollapseRadio from "../../../utils/CollapseRadio";
import { price, places } from "../../../utils/FixedFilterItem";
import { makeStyles } from "@material-ui/styles";
import CollapseCheckbox from "../../../utils/CollapseCheckBox";
import styles from "./FilterItemMobileStyled";
import { useRecoilState } from "recoil";
import { filterState } from "../../../lib/recoil-root";
const FilterItem = ({ productByCate }) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const [filter, setFilter] = useRecoilState(filterState);
  const listPlaces = [];
  const handleFilters = (filters, cate) => {
    if (filters.length > 0) {
      setFilter((preState) => ({ ...preState, districts: filters.toString() }));
    }
  };
  if (productByCate) {
    productByCate?.map((item, index) => {
      listPlaces.push(item.address);
    });
  }
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
        list={listPlaces}
        handleFilters={(filters) => handleFilters(filters, "places")}
      />
    </div>
  );
};
export default FilterItem;
