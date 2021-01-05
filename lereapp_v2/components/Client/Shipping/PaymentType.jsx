import React from "react";
import { makeStyles } from "@material-ui/styles";
import momoIcon from "../../../assets/momo_icon.svg";
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked1 from "@material-ui/icons/RadioButtonCheckedOutlined";
import CircleChecked from "@material-ui/icons/RadioButtonUnchecked";
const PaymentInfo = (props) => {
  const useStyled = makeStyles((theme) => ({
    main_paymentType: {},
    main_paymentType__sub: {
      "& p": {
        color: "#888E8A",
        fontSize: 14,
      },
    },
    main_paymentType__select: {
      display: "flex",
      alignItems: "center",
      paddingTop: 30,
      marginLeft: -9,
      [theme.breakpoints.down("xs")]: {
        paddingTop: 15,
      },
    },
    main_paymentType__selectImage: {
      backgroundImage: `url(${momoIcon})`,
      height: 32,
      width: 32,
      backgroundRepeat: "no-repeat",
    },
    main_paymentType__selectContent: {
      paddingLeft: 12,
    },
  }));
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