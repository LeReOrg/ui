import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";
import { useRecoilState } from "recoil";
import { cartState } from "../lib/recoil-root";
// import { addItem, removeItem } from "../store/action/cart_actions";
const SelectBoxCart = (props) => {
  const { quantity } = props;
  const [cart, setCart] = useRecoilState(cartState);

  const useStyles = makeStyles((theme) => ({
    removeIcon: {
      background: "transparent",
      boxShadow: "none",
      width: 24,
      height: 24,
      minHeight: 24,
      marginRight: 0,
      border: "1px solid #E7E9E8",
      [theme.breakpoints.up("lg")]: {
        width: 36,
        height: 36,
      },
    },
    addIcon: {
      background: "transparent",
      boxShadow: "none",
      width: 24,
      height: 24,
      minHeight: 24,
      marginLeft: 0,
      border: "1px solid #E7E9E8",
      color: "#2FAF62",
      [theme.breakpoints.up("lg")]: {
        width: 36,
        height: 36,
      },
    },
    disabled: {
      color: "#C3C7C5",
      pointerEvents: "none",
    },
    itemSelect: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        paddingBottom: 0,
      },
    },
    dateSelect: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  }));
  const classes = useStyles();
  const addItem = () => {
    setCart(
      [...cart].map((object) => {
        if (object.id === props.cartItem.id) {
          return {
            ...object,
            quantity: quantity + 1,
          };
        } else return object;
      })
    );
  };
  return (
    <>
      <div className={classes.itemSelect}>
        <Fab
          className={`${classes.removeIcon} ${
            quantity === 1 ? classes.disabled : null
          }`}
          aria-label="remove"
          // onClick={() => props.removeItem(props.cartItem)}
        >
          <RemoveIcon />
        </Fab>
        {quantity}
        <Fab
          className={classes.addIcon}
          aria-label="add"
          onClick={() => addItem()}
        >
          <AddIcon />
        </Fab>
      </div>
      {/* <div className={classes.dateSelect}>
        <Fab
          className={`${classes.removeIcon} ${
            numberDate === 1 ? classes.disabled : null
          }`}
          aria-label="remove"
          // onClick={() => props.removeItem(props.cartItem)}
        >
          <RemoveIcon />
        </Fab>
        {numberDate} ngày
        <Fab
          className={classes.addIcon}
          aria-label="add"
          // onClick={() => props.addItem(props.cartItem)}
        >
          <AddIcon />
        </Fab>
      </div> */}
    </>
  );
};

export default SelectBoxCart;
