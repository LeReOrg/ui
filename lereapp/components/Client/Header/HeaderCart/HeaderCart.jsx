import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingBag from "../../../../assets/shopping_bag.svg";
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
      padding: "0 56px 0 0",
    },
  },
  header_cart_icon: {
    background: `url(${ShoppingBag})`,
    height: 24,
    width: 24,
    padding: 10,
    [theme.breakpoints.down("sm")]: {},
  },
  header_cart_countItem: {
    color: "#2FAF62",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    paddingLeft: 12,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 3,
    },
  },
}));
const HeaderCart = () => {
  const classes = useStyles();
  return (
    <div className={classes.header_cart_main}>
      <div className={classes.header_cart_icon}></div>
      <div className={classes.header_cart_countItem}>(0)</div>
    </div>
  );
};

export default HeaderCart;
