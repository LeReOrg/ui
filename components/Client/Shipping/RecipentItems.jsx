import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import ShippingItem from "../../../utils/ShippingItem";
import { useState } from "react";
import styles from './ShippingStyled'
import {customCurrency} from '../../../utils/FunctionUses'
import { cartTotalItem } from "../../../lib/recoil-root";
import { useRecoilValue } from "recoil";
import  Router  from "next/router";

const RecipentItems = ({ cartItem, totalPrice }) => {
  const [disabled, setDisabled] = useState(true);
  const [transportValue,setTransportValue] = useState(0)
  const totalItem = useRecoilValue(cartTotalItem);
  let parsedString = totalPrice.toString();
  const useStyled = makeStyles(styles)
  const classes = useStyled({
    disabled : disabled
  });
  const paymentAccess = () => {
    alert("Bạn đã than toán thành công")
    Router.push("/")
  }
  const renderRecipentItem = () =>
    cartItem?.map((item, index) => (
      <ShippingItem item={item} key={index} />
    ));
    const totalPayment = parseInt(transportValue) + parseInt(parsedString);
  return (
    <div className={classes.main_recipent}>
      <div className={classes.main_recipent__title}>
        <h1>Đơn hàng</h1>
        <p className={classes.main_recipent__totalNumber}>{totalItem} sản phẩm</p>
      </div>
      <div>{renderRecipentItem()}</div>
      <hr className={classes.main_recipent__hr} />
      <div className={classes.main_recipent__summary}>
        <div className={classes.main_recipent__summaryProvisional}>
          <p>Tạm tính:</p>
          <p>{customCurrency(parsedString)}đ</p>
        </div>
        <div className={classes.main_recipent__summaryTransport}>
          <p>Vận chuyển:</p>
          <p>{transportValue} d</p>
        </div>
        <hr />
      </div>
      <div className={classes.main_recipent__finalPayment}>
        <div className={classes.main_recipent__totalPayment}>
          <div>Tổng tiền</div>
          <div className={classes.main_recipent__totalPaymentNumber}>
          <p>{customCurrency(totalPayment.toString())}đ</p>
          </div>
        </div>
        <div className={classes.main_recipent__rePayment}>
          <p>
            Tiền cọc (nếu có) sẽ được hoàn trả qua ví điện tử Momo khi bạn đã
            trả hàng thành công
          </p>
        </div>
        <div className={classes.main_recipent__paymentButton}>
          <button onClick={() => paymentAccess()} >Tiến hành thanh toán</button>
        </div>
      </div>
    </div>
  );
};

export default RecipentItems;
