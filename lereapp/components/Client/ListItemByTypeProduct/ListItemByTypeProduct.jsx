import React from "react";
import {  Box, Typography, Grid } from "@material-ui/core";
import CardProduct from "../../../utils/CardProduct";
import { useState } from "react";
import { capitalize } from "../../../utils/FunctionUses";
import Sort  from "./Sort";
import PaginationRounded from "../../../utils/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faSlidersH from "@fortawesome/fontawesome-free-solid/faSlidersH";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  interested_main: {
    marginTop: 64,
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
    },
  },
  interested_title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      display: "none",
    },
  },
  title_main: {
    display: "flex",
    justifyContent: "space-between",
   alignItems : "center"
  },
  mobile_mode_filter: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems : "center",
      justifyContent : "space-between",
      width : "50px"
    },
  },
}));
const ListItemByTypeProduct = (props) => {
  const classes = useStyles();
  const [test, setTest] = useState(false);
  return (
    <div className={classes.interested_main}>
      <Typography component="div">
        <div className={classes.title_main}>
          <Box className={classes.interested_title}>
            {props.typeProduct && capitalize(props.typeProduct)}
          </Box>
          <Box className={classes.mobile_mode_filter}>
            <FontAwesomeIcon icon={faSlidersH} className="icon" />
            <span>Lọc</span>
          </Box>
          <Sort initState={false} />
        </div>

        <Grid container spacing={8}>
          <Grid item lg={3} xs={6}>
            <CardProduct test={test} itemByType={true} />
          </Grid>
          <Grid item lg={3} xs={6}>
            <CardProduct itemByType={true} />
          </Grid>
          <Grid item lg={3} xs={6}>
            <CardProduct itemByType={true} />
          </Grid>
          <Grid item lg={3} xs={6}>
            <CardProduct test={test} itemByType={true} />
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item lg={3} xs={6}>
            <CardProduct test={test} itemByType={true} />
          </Grid>
          <Grid item lg={3} xs={6}>
            <CardProduct itemByType={true} />
          </Grid>
          <Grid item lg={3} xs={6}>
            <CardProduct itemByType={true} />
          </Grid>
          <Grid item lg={3} xs={6}>
            <CardProduct test={test} itemByType={true} />
          </Grid>
        </Grid>
      </Typography>
      <PaginationRounded />
    </div>
  );
};

export default ListItemByTypeProduct;
