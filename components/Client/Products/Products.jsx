import React, { useState } from "react";
import styles from "./ProductsStyled";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import Link from "next/link";
import CustomForm from "../../../utils/CustomForm";
import ProductLessor from "../../../utils/ProductLessor";
import { useProductLessor } from "../../../hooks/useProduct/";
import { useRecoilValue } from "recoil";
import { userState } from "../../../lib/recoil-root";
const Products = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [available, setAvailable] = useState("0");
  const updateSelection = (event, value) => {
    event.persist();
    setAvailable(value);
  };

  const user = useRecoilValue(userState);
  const { data: products, isLoading, isSuccess } = useProductLessor(
    user?.user?._id
  );
  const renderItems = () =>
    products?.docs
      ?.filter((item) => {
        if (available !== "0") {
          if (available === "2") {
            return item.quantity === 0;
          } else {
            return item.quantity > 0;
          }
        } else {
          return item;
        }
      })
      .map((item, index) => <ProductLessor item={item} key={index} />);
  return (
    <div>
      <Box className={classes.productsContainer}>
        <Link href="/uploadproduct">
          <a className={classes.productsAddproduct}>
            <div className={classes.addProductIcon}></div>
            <p>Thêm sản phẩm</p>
          </a>
        </Link>
      </Box>
      <Box className={classes.searchContainer} position="relative">
        <div className={classes.searchIcon}></div>
        <CustomForm
          inputType="input"
          className={classes.searchProduct}
          nameInput="displayName"
          placeholder="Tìm kiếm sản phẩm"
        />
      </Box>
      <Box className={classes.searchCheckBoxs}>
        <FormControl component="fieldset">
          <RadioGroup
            onChange={updateSelection}
            row
            aria-label="position"
            name="position"
            defaultValue="top"
            value={available}
          >
            <FormControlLabel
              value="0"
              control={<Radio size="small" color="primary" />}
              label="Tất cả"
              className={classes.searchCheckBox}
            />
            <FormControlLabel
              value="1"
              control={<Radio size="small" color="primary" />}
              label="Có sẵn"
              className={classes.searchCheckBox}
            />
            <FormControlLabel
              value="2"
              control={<Radio size="small" color="primary" />}
              label="Đang thuê"
              className={classes.searchCheckBox}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box className={classes.productTable}>
        <Box className={classes.productTableTitle}>
          <div>Tên sản phẩm</div>
          <div>Giá(đ)</div>
          <div>Có sẵn</div>
          <div>Lịch thuê</div>
          <div>Hành động</div>
        </Box>
        <Box className={classes.productTableContainer}>{renderItems()}</Box>
      </Box>
    </div>
  );
};
export default Products;
