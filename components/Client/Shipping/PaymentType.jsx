import React from "react";
import { makeStyles } from "@material-ui/styles";
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked1 from "@material-ui/icons/RadioButtonCheckedOutlined";
import CircleChecked from "@material-ui/icons/RadioButtonUnchecked";
import styles from "./ShippingStyled";
const PaymentInfo = (props) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  return (
    <div className={classes.main_paymentType}>
      <div className={classes.main_paymentType__sub}>
        <p>Hiện tại chúng tôi chỉ hỗ trợ thanh toán qua Momo ^^</p>
      </div>
      <div className={classes.main_paymentType__select}>
        <div>
          <Checkbox
            className={classes.main_paymentType__checkBox}
            icon={<CircleChecked />}
            checkedIcon={<CircleChecked1 />}
          />
        </div>
        <div className={classes.main_paymentType__selectImage}></div>
        <div className={classes.main_paymentType__selectContent}>
          <p>Ví điện tử Momo</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
