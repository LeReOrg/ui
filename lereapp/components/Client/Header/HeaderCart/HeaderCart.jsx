import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import Link from "next/link";
import styles from "./HeaderCartStyled";

const useStyles = makeStyles(styles);
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
