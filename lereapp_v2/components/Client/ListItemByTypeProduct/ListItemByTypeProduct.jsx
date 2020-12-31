import React,{useEffect} from "react";
import {  Box, Typography, Grid } from "@material-ui/core";
import CardProduct from "../../../utils/CardProduct";
import { useState } from "react";
import { capitalize } from "../../../utils/FunctionUses";
import Sort  from "./Sort";
import PaginationRounded from "../../../utils/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faSlidersH from "@fortawesome/fontawesome-free-solid/faSlidersH";
import { makeStyles } from "@material-ui/core/styles";
import FilterItemMobile from "../FilterItem/FilterItemMobile";
import styles from "./ListItemByTypeProductStyled";

const useStyles = makeStyles(styles);
const ListItemByTypeProduct = (props) => {
  const classes = useStyles();
  let renderCards = [];
  if(props.listProduct.length >0 ){
     renderCards = 
     props.listProduct.map((items, index) => (
        <Grid item lg={3} xs={6} key={index}>
            <CardProduct item={items} itemByType={true} />
          </Grid>
     
      ))
    
  }
  const [displayFilter, setDisplayFilter] = useState(false);
  const showFilter = () => {
    setDisplayFilter(true);
  };
  const onChangeDisplay = () =>{
    setDisplayFilter(false);
  }
  return (
    <div className={classes.interested_main}>
      <Typography component="div">
        <div className={classes.title_main}>
          <Box className={classes.interested_title}>
            {props.typeProduct && capitalize(props.typeProduct)}
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

        <Grid container spacing={8}>
            {renderCards}
        </Grid>
      </Typography>
      <PaginationRounded />
      <FilterItemMobile
        onChangeDisplay={onChangeDisplay}
        display={displayFilter}
      />
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return { 
//     productByType : state.products.products.products
//   }
// }

export default ListItemByTypeProduct;
