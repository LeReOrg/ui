import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import CardProduct from "../../../utils/CardProduct";
import { useState } from "react";
import { capitalize, isMobileDevice } from "../../../utils/FunctionUses";
import Sort from "./Sort";
import PaginationRounded from "../../../utils/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faSlidersH from "@fortawesome/fontawesome-free-solid/faSlidersH";
import { makeStyles } from "@material-ui/core/styles";
// import FilterItemMobile from "../FilterItem/FilterItemMobile";
import styles from "./ListItemByTypeProductStyled";
import { useDetailCategory } from "../../../hooks/useCategories";
import { useRouter } from "next/router";

const ListItemByTypeProduct = ({ listProduct }) => {
  const router = useRouter();
  const { data: categoryData, isError, isSuccess } = useDetailCategory(
    router.query.index
  );
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const renderCards = () =>
    listProduct?.map((items, index) => (
      <Grid item lg={3} xs={6} key={index}>
        <CardProduct item={items} itemByType={true} />
      </Grid>
    ));
  const [displayFilter, setDisplayFilter] = useState(false);
  const showFilter = () => {
    setDisplayFilter(true);
  };
  const onChangeDisplay = () => {
    setDisplayFilter(false);
  };
  return (
    <div>
      <Typography component="div">
        <div className={classes.title_main}>
          <Box className={classes.interested_title}>
            {categoryData && capitalize(categoryData.name)}
          </Box>
          <Box
            className={classes.mobile_mode_filter}
            onClick={() => showFilter()}
          >
            <FontAwesomeIcon icon={faSlidersH} className="icon" />
            <span>Lọc</span>
          </Box>
          <Sort />
        </div>

        <Grid
          container
          spacing={isMobileDevice() ? 4 : 8}
          className={classes.typeProduct_content}
        >
          {listProduct?.length > 0 ? (
            renderCards()
          ) : (
            <p>Không có sản phẩm nào</p>
          )}
        </Grid>
      </Typography>
      {/* <PaginationRounded
        numPage={props.listProduct?.numPage}
        onChangePage={(e, page) => onChangePage(e, page)}
      /> */}
      {/* {isMobileDevice() ? (
        <FilterItemMobile
          onChangeDisplay={onChangeDisplay}
          display={displayFilter}
        />
      ) : null} */}
    </div>
  );
};
export default ListItemByTypeProduct;
