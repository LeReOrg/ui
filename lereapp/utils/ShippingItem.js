import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectBoxCart from "../utils/SelectBoxCart";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Grid, Button, Box } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const ShippingItem = ({ item, addItem }) => {
  const { name, price, cungcap, songay, coc, soluong, image } = item;
const test = parseInt(price);
  const [allParamCart, setParamCart] = useState(item);
  const useStyles = makeStyles((theme) => ({
    smallImage: {
      // height: 88,
      // width: 88,
      [theme.breakpoints.down("xs")]: {
        height: 64,
      },
    },
    nameItem: {
      //   color: "#111E16 !important",
    },
    cartBody: {
      display: "flex",
      margin: "16px 0",
      border: "none",
      flexDirection: "column",
      [theme.breakpoints.down("xs")]: {
        margin: 0,
      },
    },
    hrCart: {
      background: "#E7E9E8",
      "&:last-child": {
        display: "none",
      },
    },
    infoItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 10,
      "& span": {
        fontWeight: "bold",
      },
    },
    infoContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    depositMoney: {
      textAlign: "right",
      paddingTop: 8,
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className={classes.cartBody}>
        <Grid container spacing={2}>
          <Grid item lg={3} xs={3}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={image}
                title="Contemplative Reptile"
                className={classes.smallImage}
              />
            </CardActionArea>
          </Grid>
          <Grid item lg={9} xs={9} className={classes.infoContent}>
            <Typography className={classes.nameItem}>
              {name === undefined
                ? "Go Pro 5 con xin 99% ,mới được mua còn bảo hành 3 tháng còn bảo hành abcxyz"
                : name}
            </Typography>
            <Typography className={classes.infoItem}>
              <span>x{soluong}</span> <span>{songay} ngày</span>
              <span>
                {parseInt(price).toLocaleString("en-US")}
                đ/ngày
              </span>
            </Typography>
          </Grid>
        </Grid>
        {coc ? (
          <Box className={classes.depositMoney}>
            <span>Cọc: {parseInt(coc).toLocaleString("en-US")}đ</span>
          </Box>
        ) : null}
      </div>
      <hr className={classes.hrCart} />
    </>
  );
};

export default ShippingItem;
