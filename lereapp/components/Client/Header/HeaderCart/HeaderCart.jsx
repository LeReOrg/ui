import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingBag from "../../../../assets/shopping_bag.svg";
import ShoppingBagMobile from "../../../../assets/ic_shoppingbag_mobile.svg";

import { connect } from "react-redux";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  header_cart_main: {
    border: "1px solid #2FAF62",
    borderRadius: 4,
    padding: "9px 25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      border: "none",
      padding: "0 40px 0 0",
    },
  },
  header_cart_icon: {
    background: `url(${ShoppingBag})`,
    height: 24,
    width: 24,
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      background: `url(${ShoppingBagMobile})`,
    },
  },
  header_cart_countItem: {
    color: "#2FAF62",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    paddingLeft: 12,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 3,
      color: "black",
    },
  },
}));
const HeaderCart = (props) => {
  const classes = useStyles();
  // console.log(props.cartItem);
  return (
    <Link href="/cart">
      <a>
        <div className={classes.header_cart_main}>
          <div className={classes.header_cart_icon}></div>
          <div className={classes.header_cart_countItem}>
            ({props.cartItem.cartTotal})
          </div>
        </div>
      </a>
    </Link> 
  );
};
const mapStateToProps = (state) => {
  return {
    cartItem: state.carts,
  };
};
export default connect(mapStateToProps)(HeaderCart);
