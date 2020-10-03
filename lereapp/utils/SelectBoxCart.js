import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";

const SelectBoxCart = (props) => {
  const [numberDate, setNumberDate] = useState(props.numberDate);
  const [quantity, setQuantity] = useState(props.quantity);
  const useStyles = makeStyles((theme) => ({
    removeIcon: {
      background: "transparent",
      boxShadow: "none",
      width: 36,
      height: 36,
      border: "1px solid #E7E9E8",
    },
    addIcon: {
      background: "transparent",
      boxShadow: "none",
      width: 36,
      height: 36,
      border: "1px solid #E7E9E8",
      color: "#2FAF62",
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
    },
    dateSelect: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  }));
  const classes = useStyles();
  const increase = (info) => {
    if (info === "date") {
      const newCount = numberDate + 1;
      setNumberDate(newCount);
      props.onNumberAndQuantityChange({
        songay: newCount,
      });
    } else {
      const newCount = quantity + 1;
      setQuantity(newCount);
      props.onNumberAndQuantityChange({
        soluong: newCount,
      });
    }
  };
  const reduce = (info) => {
    if (info === "date") {
      const newCount = numberDate === 1 ? 1 : numberDate - 1;
      setNumberDate(newCount);
      props.onNumberAndQuantityChange({
        songay: newCount,
      });
    } else {
      const newCount = quantity === 1 ? 1 : quantity - 1;
      setQuantity(newCount);
      props.onNumberAndQuantityChange({
        soluong: newCount,
      });
    }
  };
  return (
    <>
      <div className={classes.itemSelect}>
        <Fab
          className={`${classes.removeIcon} ${
            quantity === 1 ? classes.disabled : null
          }`}
          aria-label="remove"
          onClick={() => reduce("item")}
        >
          <RemoveIcon />
        </Fab>
        {quantity} món
        <Fab
          className={classes.addIcon}
          aria-label="add"
          onClick={() => increase("item")}
        >
          <AddIcon />
        </Fab>
      </div>
      <div className={classes.dateSelect}>
        <Fab
          className={`${classes.removeIcon} ${
            numberDate === 1 ? classes.disabled : null
          }`}
          aria-label="remove"
          onClick={() => reduce("date")}
        >
          <RemoveIcon />
        </Fab>
        {numberDate} ngày
        <Fab
          className={classes.addIcon}
          aria-label="add"
          onClick={() => increase("date")}
        >
          <AddIcon />
        </Fab>
      </div>
    </>
  );
};

export default SelectBoxCart;
