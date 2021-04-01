import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";
// import { addItem, removeItem } from "../store/action/cart_actions";
const SelectBoxCart = (props) => {
  const { numberDate, quantity } = props;
  console.log(props.cartItem)
  const useStyles = makeStyles((theme) => ({
    removeIcon: {
      background: "transparent",
      boxShadow: "none",
      width: 36,
      height: 36,
      border: "1px solid #E7E9E8",
      [theme.breakpoints.down("xs")]: {
        width: 24,
        height: 24,
        minHeight: 24,
        marginRight: 15,
      },
    },
    addIcon: {
      background: "transparent",
      boxShadow: "none",
      width: 36,
      height: 36,
      border: "1px solid #E7E9E8",
      color: "#2FAF62",
      [theme.breakpoints.down("xs")]: {
        width: 24,
        height: 24,
        minHeight: 24,
        marginLeft: 15,
      },
    },
    disabled: {
      color: "#C3C7C5",
      pointerEvents: "none",
    },
    itemSelect: {
      paddingBottom: 10,
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
        {quantity} món
        <Fab
          className={classes.addIcon}
          aria-label="add"
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
