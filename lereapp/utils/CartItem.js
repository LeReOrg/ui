import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectBoxCart from "../utils/SelectBoxCart";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import { clearItemFromCart } from "../store/action/cart_actions";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const CartItem = ({ item, clearItem }) => {
  const {
    name,
    price,
    owner_id,
    totalDateRent,
    coc,
    quantity,
    imageURL,
  } = item;
  console.log(item)
  const [allParamCart, setParamCart] = useState(item);
  useEffect(() => {
    let priceUpdate = 0;
    priceUpdate = item.quantity * item.price;
    setParamCart((preState) => ({
      ...preState,
      price: priceUpdate,
    }));
  }, [item.quantity]);
  const useStyles = makeStyles((theme) => ({
    smallImage: {
      //   height: 88,
      //   width: 88,
    },
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
      [theme.breakpoints.down("xs")]: {
        color: "#2FAF62",
        fontSize: 14,
      },
    },
    selectedBoxCart: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        order: 2,
      },
    },
  }));
  const classes = useStyles();
  return (
    <>
      <div className={classes.cartBody}>
        <Grid container spacing={2}>
          <Grid item lg={2} xs={3}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={imageURL}
                title="Contemplative Reptile"
                className={classes.smallImage}
              />
            </CardActionArea>
          </Grid>
          <Grid item lg={10} xs={9}>
            <Grid container>
              <Grid item lg={5} xs={10}>
                <Typography>
                  {name === undefined
                    ? "Go Pro 5 con xin 99% ,mới được mua còn bảo hành 3 tháng còn bảo hành abcxyz"
                    : name}
                </Typography>
                <Typography>
                  Cung cấp bởi
                  <span
                    style={{ paddingLeft: 5 }}
                    className={classes.nameProvided}
                  >
                    {owner_id}
                  </span>
                </Typography>
              </Grid>
              <Grid item className={classes.deleteButtonMobile} xs={2}>
                <Button className={classes.deleteButton}>
                  <DeleteOutlineIcon />
                </Button>
              </Grid>
              <Grid item lg={2} xs={12} className={classes.selectedBoxCart}>
                <SelectBoxCart
                  cartItem={item}
                  numberDate={totalDateRent}
                  quantity={quantity}
                />
              </Grid>
              <Grid item lg={5} xs={12} className={classes.infoAmount}>
                <Typography className={classes.infoAmountNumber}>
                  {allParamCart.price.toLocaleString("en-US")}đ/ngày
                </Typography>
                <Typography>Cọc : {coc}đ/ngày</Typography>
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
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
