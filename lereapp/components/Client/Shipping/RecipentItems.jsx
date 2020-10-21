import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import ShippingItem from "../../../utils/ShippingItem";
import { useState } from "react";

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
  const useStyled = makeStyles((theme) => ({
    main_recipent: {
      padding: 24,
      [theme.breakpoints.down("xs")]: {
        padding: 0,
      },
      "& h1": {
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "bold",
        marginBottom: 0,
      },
      "& p": {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
      },
    },
    main_recipent__totalNumber: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      color: "#888E8A",
    },

    main_recipent__title: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    main_recipent__hr: {
      marginLeft: -24,
      marginRight: -24,
    },
    main_recipent__summaryProvisional: {
      display: "flex",
      justifyContent: "space-between",
      "& p": {
        fontSize: 16,
      },
    },
    main_recipent__summaryTransport: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 16,
      "& p": {
        fontSize: 16,
      },
    },
    main_recipent__finalPayment: {},
    main_recipent__totalPayment: {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: 16,
    },
    main_recipent__rePayment: {
      paddingBottom: 16,
    },
    main_recipent__totalPaymentNumber: {
      color: "#2FAF62",
      fontWeight: "bold",
      fontSize: 20,
    },
    main_recipent__paymentButton: {
      textAlign: "center",
      "& button": {
        padding: "15px 60px",
        background: `${!disabled ? "#2FAF62" : "#E7E9E8"}`,
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        border: "none",
        borderRadius: 4,
        color: `${!disabled ? "#FFFFFF" : "#C3C7C5"}`,
      },
    },
  }));
  function totalMoney(total, num) {
    return parseInt(total) + parseInt(num.price);
  }
  const renderRecipentItem = () =>
    cartItem.cartItems.map((item, index) => (
      <ShippingItem item={item} key={index} />
    ));
  const classes = useStyled();
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
