import React from "react";
import styles from "./ProductsStyled";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Link from "next/link";

const Products = () => {
  const useStyles = makeStyles(styles);

  const classes = useStyles();

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
      <Box>
        {/* <FormField
          id={"search"}
          formData={search.searchData.search}
          change={(element) => updateSearch(element)}
          type="text"
          placeholder="Tìm kiếm"
          useClasses={false}
          className={classes.inputSearch}
        />
        <div className={classes.searchIcon}></div> */}
      </Box>
    </div>
  );
};
export default Products;
