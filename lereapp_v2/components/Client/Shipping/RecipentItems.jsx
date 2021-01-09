import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import ShippingItem from "../../../utils/ShippingItem";
import { useState } from "react";
import styles from './ShippingStyled'

const RecipentItems = ({ cartItem, values, totalPrice }) => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (
      values.city != -1 &&
      values.district != -1 &&
      values.ward != -1 &&
      values.address != ""
    )
      setDisabled(false);
  }, [values]);
  const useStyled = makeStyles(styles)
  const classes = useStyled({
    disabled : disabled
  });
  function totalMoney(total, num) {
    return parseInt(total) + parseInt(num.price);
  }
  const renderRecipentItem = () =>
    cartItem.cartItems.map((item, index) => (
      <ShippingItem item={item} key={index} />
    ));
  return (
    <div className={classes.main_recipent}>
      <div className={classes.main_recipent__title}>
        <h1>Đơn hàng</h1>
        <p className={classes.main_recipent__totalNumber}>2 sản phẩm</p>
      </div>
      <div>{renderRecipentItem()}</div>
      <hr className={classes.main_recipent__hr} />
      <div className={classes.main_recipent__summary}>
        <div className={classes.main_recipent__summaryProvisional}>
          <p>Tạm tính:</p>
          {/* <p>{testItem.reduce(totalMoney, 0).toLocaleString("en-US")}đ</p> */}
        </div>
        <div className={classes.main_recipent__summaryTransport}>
          <p>Vận chuyển:</p>
          {/* <p>{testItem.reduce(totalMoney, 0).toLocaleString("en-US")}đ</p> */}
        </div>
        <hr />
      </div>
      <div className={classes.main_recipent__finalPayment}>
        <div className={classes.main_recipent__totalPayment}>
          <div>Tổng tiền</div>
          <div className={classes.main_recipent__totalPaymentNumber}>
            {totalPrice.toLocaleString("en-US")}
          </div>
        </div>
        <div className={classes.main_recipent__rePayment}>
          <p>
            Tiền cọc (nếu có) sẽ được hoàn trả qua ví điện tử Momo khi bạn đã
            trả hàng thành công
          </p>
        </div>
        <div className={classes.main_recipent__paymentButton}>
          <button type="submit">Tiến hành thanh toán</button>
        </div>
      </div>
    </div>
  );
};

export default RecipentItems;
