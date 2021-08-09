import React, { useState, useEffect } from "react";
import CollapseRadio from "../../../utils/CollapseRadio";
import { price } from "../../../utils/FixedFilterItem";
import CollapseCheckbox from "../../../utils/CollapseCheckBox";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./FilterItemMobileStyled";
import { filterState } from "../../../lib/recoil-root";
import { useRecoilState } from "recoil";

const FilterItemMobile = ({
  productByCate,
  displayFilter,
  onChangeDisplay,
}) => {
  const [filter, setFilter] = useRecoilState(filterState);
  const listPlaces = [];
  const [display, setDisplay] = useState(false);
  const useStyled = makeStyles(styles);
  const classes = useStyled({
    display: display,
  });
  useEffect(() => {
    if (displayFilter) {
      setDisplay(true);
    }
  }, [displayFilter]);

  const handleFilters = (filters, cate) => {
    if (cate === "place") {
      if (filters.length > 0) {
        setFilter((preState) => ({
          ...preState,
          districts: filters.toString(),
        }));
      } else {
        if (filter.districts)
          setFilter((preState) => ({ ...preState, districts: undefined }));
      }
    } else {
      if (filters === 0) {
        setFilter((preState) => ({ ...preState, priceRange: undefined }));
      } else {
        const prices = price.filter((item) => item._id == filters);
        setFilter((preState) => ({
          ...preState,
          priceRange: prices[0]?.array,
        }));
      }
    }
  };
  if (productByCate) {
    productByCate?.map((item, index) => {
      listPlaces.push(item.address);
    });
  }
  const hideModel = () => {
    setDisplay(false);
    onChangeDisplay();
  };
  return (
    <div className={classes.filter_main_mobile_background}>
      <div className={classes.filter_main_mobile}>
        <div
          className={classes.filter_main_mobileClose}
          onClick={() => hideModel()}
        >
          X
        </div>
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
          handleFilters={(filters) => handleFilters(filters, "place")}
        />
      </div>
    </div>
  );
};
export default FilterItemMobile;
