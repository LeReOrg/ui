import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectBoxCart from "../utils/SelectBoxCart";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, Box } from "@material-ui/core";
import { useRecoilState } from "recoil";
import Image from "next/image";
import { cartState } from "../lib/recoil-root";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import styles from "../styles/CartStyled";
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
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const clearItem = (item) => {
    const newItem = cart.filter((itemCart) => itemCart.id !== item.id);
    setCart(newItem);
  };
  return (
    <>
      <div className={classes.cartBody}>
        <Grid container spacing={2}>
          <Grid item xl={5} lg={5} md={5} xs={12} style={{ display: "flex" }}>
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
              <Box className={classes.selectedBoxCartMobile}>
                <SelectBoxCart cartItem={item} quantity={quantity} />
              </Box>
            </Typography>
          </Grid>
          <Grid item xl={7} lg={7} md={7} xs={12}>
            <Grid container>
              <Grid
                item
                xl={4}
                lg={4}
                xs={12}
                className={classes.selectedBoxCart}
              >
                <SelectBoxCart cartItem={item} quantity={quantity} />
              </Grid>
              <Grid item xl={7} lg={7} xs={10} className={classes.infoAmount}>
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

              <Grid item xl={1} lg={1} xs={2}>
                <Button
                  onClick={() => clearItem(item)}
                  className={classes.deleteButton}
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
