import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectBoxCart from "../utils/SelectBoxCart";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import { useRecoilValue, useRecoilState } from "recoil";
import Image from "next/image";
import { cartState } from "../lib/recoil-root";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const CartItem = ({ item }) => {
  const {
    id,
    name,
    price,
    user,
    totalDays,
    depositPrice,
    quantity,
    image,
    formDate,
    toDate,
  } = item;

  const [cart, setCart] = useRecoilState(cartState);
  console.log(item);
  let startDateFormat = formDate?.slice(0, 10);
  let startDay = `${startDateFormat.substr(-2, 2)}/${startDateFormat.substr(
    -5,
    2
  )}/${startDateFormat.substr(0, 4)}`;
  let endDateFormat = toDate?.slice(0, 10);
  let endDay = `${endDateFormat.substr(-2, 2)}/${endDateFormat.substr(
    -5,
    2
  )}/${endDateFormat.substr(0, 4)}`;

  const useStyles = makeStyles((theme) => ({
    cartBody: {
      display: "flex",
      alignItems: "center",
      margin: "24px 24px",
      border: "none",
      [theme.breakpoints.down("xs")]: {
        margin: 0,
      },
    },
    nameProvided: {
      color: "#2F80ED",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 12,
      lineHeight: "18px",
    },
    infoAmount: {
      textAlign: "right",
      [theme.breakpoints.down("xs")]: {
        textAlign: "left",
      },
    },
    deleteButton: {
      padding: 0,
      float: "right",
      display: "inline-block",
      textAlign: "right",
    },
    deleteButtonDeskTop: {
      padding: 0,
      float: "right",
      display: "inline-block",
      textAlign: "right",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    cartBodyText: {
      marginLeft: 16,
      textTransform: "capitalize",
      "& p": {
        fontSize: 12,
        lineHeight: "18px",
        color: "#888E8A",
        textTransform: "initial",
      },
    },
    hrCart: {
      marginRight: 24,
      marginLeft: 24,
      background: "#E7E9E8",
      "&:last-child": {
        display: "none",
      },
      [theme.breakpoints.down("xs")]: {
        marginRight: 0,
        marginLeft: 0,
      },
    },
    deleteButtonMobile: {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "inline-block",
      },
    },
    infoAmountNumber: {
      fontWeight: "bold",
      fontSize: 16,
      marginBottom: "15px !important",
      lineHeight: "22px",

      [theme.breakpoints.down("xs")]: {
        color: "#2FAF62",
        fontSize: 14,
      },
    },
    depositNumber: {
      color: "#888E8A",
      fontSize: 14,
      lineHeight: "20px",
    },
    selectedBoxCart: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        order: 2,
      },
    },
    cartBodyTextName: {
      fontSize: "14px !important",
      lineHeight: "20px !important",
      color: "#111E16 !important",
    },
  }));
  const classes = useStyles();
  const clearItem = (item) => {
    const newItem = cart.filter((itemCart) => itemCart.id !== item.id);
    setCart(newItem);
  };
  return (
    <>
      <div className={classes.cartBody}>
        <Grid container spacing={2}>
          <Grid item lg={4} xs={3} style={{ display: "flex" }}>
            <Image src={image.url} title={image.name} width={88} height={88} />
            <Typography className={classes.cartBodyText}>
              <Typography className={classes.cartBodyTextName}>
                {name}
              </Typography>
              <p>
                Cung cấp bởi
                <span
                  style={{ paddingLeft: 5 }}
                  className={classes.nameProvided}
                >
                  {user.displayName}
                </span>
              </p>
            </Typography>
          </Grid>
          <Grid item lg={8} xs={9}>
            <Grid container>
              <Grid item className={classes.deleteButtonMobile} xs={2}>
                <Button className={classes.deleteButton}>
                  <DeleteOutlineIcon />
                </Button>
              </Grid>
              <Grid item lg={3} xs={12} className={classes.selectedBoxCart}>
                <SelectBoxCart cartItem={item} quantity={quantity} />
              </Grid>
              <Grid item lg={5} xs={12} className={classes.infoAmount}>
                <Typography className={classes.infoAmountNumber}>
                  {price.toLocaleString("en-US")}đ/ngày
                </Typography>
                <Typography className={classes.depositNumber}>
                  Cọc : {depositPrice.toLocaleString("en-US")}đ
                </Typography>
                <Typography className={classes.depositNumber}>
                  {startDay} - {endDay} | {totalDays} ngày
                </Typography>
              </Grid>

              <Grid item lg={4} xs={12}>
                <Button
                  onClick={() => clearItem(item)}
                  className={classes.deleteButtonDeskTop}
                >
                  <DeleteOutlineIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <hr className={classes.hrCart} />
    </>
  );
};

export default CartItem;
