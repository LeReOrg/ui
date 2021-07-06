import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import ShippingItem from "../../../utils/ShippingItem";
import { useState } from "react";
import styles from "./ShippingStyled";

const RecipentItems = ({ cartItem }) => {
  const [disabled, setDisabled] = useState(true);
  const useStyled = makeStyles(styles);
  const classes = useStyled({
    disabled: disabled,
  });
  const renderRecipentItem = () =>
    cartItem?.map((item, index) => <ShippingItem item={item} key={index} />);
  return (
    <div className={classes.main_recipent}>
      <div className={classes.main_recipent__title}>
        <h1>Thông tin đơn hàng</h1>
      </div>
      <div>{renderRecipentItem()}</div>
    </div>
  );
};

export default RecipentItems;
