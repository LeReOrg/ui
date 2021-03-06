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
import FilterItemMobile from "../FilterItem/FilterItemMobile";
import styles from "./ListItemByTypeProductStyled";

const ListItemByTypeProduct = (props) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const renderCards = props.listProduct?.products?.map((items, index) => (
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
  const onChangePage = (e, page) => {
    props.page(page-1)
  };
  return (
    <div>
      <Typography component="div">
        <div className={classes.title_main}>
          <Box className={classes.interested_title}>
            {props.nameTypeProduct && capitalize(props.nameTypeProduct)}
          </Box>
          <Box
            className={classes.mobile_mode_filter}
            onClick={() => showFilter()}
          >
            <FontAwesomeIcon icon={faSlidersH} className="icon" />
            <span>Lọc</span>
          </Box>
          <Sort initState={false} />
        </div>

        <Grid
          container
          spacing={isMobileDevice() ? 4 : 8}
          className={classes.typeProduct_content}
        >
          {renderCards}
        </Grid>
      </Typography>
      <PaginationRounded
        numPage={props.listProduct?.numPage}
        onChangePage={(e, page) => onChangePage(e, page)}
      />
      {isMobileDevice() ? (
        <FilterItemMobile
          onChangeDisplay={onChangeDisplay}
          display={displayFilter}
        />
      ) : null}
    </div>
  );
};
export default ListItemByTypeProduct;
