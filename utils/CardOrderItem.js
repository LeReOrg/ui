import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import HistoryCart from "../assets/imagetest2.png";
import Image from "next/image";
import styles from "../styles/CardOrderItemStyled";
import { MyButton } from "../components/Client/Login/LoginPageStyled";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "next/link";

const CardOrderItem = ({ item }) => {
  const {
    amount,
    deposit,
    status,
    startDate,
    hiredDays,
    endDate,
    _id,
    detail,
    lessee,
  } = item;
  const useStyles = makeStyles(styles);
  let startDateFormat = startDate.slice(0, 10);
  let startDay = `${startDateFormat.substr(-2, 2)}-${startDateFormat.substr(
    -5,
    2
  )}-${startDateFormat.substr(0, 4)}`;
  let endDateFormat = endDate.slice(0, 10);
  let endDay = `${endDateFormat.substr(-2, 2)}-${endDateFormat.substr(
    -5,
    2
  )}-${endDateFormat.substr(0, 4)}`;
  const [valueStatus, setValueStatus] = useState();
  useEffect(() => {
    switch (status) {
      case "PENDING CONFIRM":
        setValueStatus("Chờ xác nhận");
        break;
      case "AWAITING PICKUP":
        setValueStatus("Chờ lấy hàng");
        break;
      case "DELIVERING":
        setValueStatus("Đang giao hàng");
        break;
      case "DELIVERED":
        setValueStatus("Đã giao hàng");
        break;
      case "AWAITING RETURN PICKUP":
        setValueStatus("Chờ xác nhận");
        break;
      case "RETURNING":
        setValueStatus("Chờ xác nhận");
        break;
      case "RETURNED":
        setValueStatus("Chờ xác nhận");
        break;
      case "CANCELLED":
        setValueStatus("Chờ xác nhận");
        break;
      default:
        break;
    }
  }, [status]);
  const classes = useStyles();
  return (
    <div className={classes.tabInfo}>
      <Grid className={classes.tabInfoItems} container>
        <Grid item lg={4} md={4}>
          <div className={classes.tabInfoStatus}>{valueStatus}</div>
        </Grid>
        <Grid item lg={4} md={4}>
          <div className={classes.tabInfoCode}>Mã đơn hàng LERE {_id}</div>
        </Grid>
        <Grid item lg={4} md={4}>
          <div className={classes.cancelOrder}>Hủy đơn hàng</div>
        </Grid>
      </Grid>
      <Grid className={classes.tabInfobody} container>
        <Grid item lg={5} md={5}>
          <div className={classes.tabInfo_contentLeft}>
            <div className={classes.tabInfo_contentLeftImage}>
              <Image src={detail.thumbnail.url} height={88} width={88} />
            </div>
            <div className={classes.tabInfo_contentLeftInfo}>
              <p>{detail.name}</p>
              <p style={{ color: "#888E8A", fontSize: 12, lineHeight: "18px" }}>
                Cung cấp bởi <span>{lessee.displayName}</span>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={4} className={classes.quantityNumber}>
          <div className={classes.tabInfo_contentRightQuantity}>
            Số lượng: {detail.quantity}
          </div>
        </Grid>
        <Grid item lg={4} md={4}>
          <div className={classes.tabInfo_contentRight}>
            <div className={classes.tabInfo_contentRightTotal}>
              <div className={classes.tabInfo_contentRightAmount}>
                Tổng tiền: {Math.round(amount).toLocaleString("en-US")}đ
              </div>

              <div className={classes.tabInfo_contentRightpile}>
                Giá thuê: {Math.round(detail.unitPrice).toLocaleString("en-US")}
                đ | Đặt cọc {Math.round(deposit).toLocaleString("en-US")}đ
              </div>
              <div className={classes.tabInfo_contentRightpile}>
                Ngày thuê: {startDay} - {endDay} | <span>{hiredDays} ngày</span>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Box className={classes.buttonActions}>
        <div className={classes.buttonActions_Content}>
          <div className={classes.buttonActions_ContentStatus}>
            <div className={classes.buttonActions_ContentIcon}></div>
            <p>Đơn hàng của bạn đang chờ xác nhận...</p>
          </div>
          <div>
            <Link href={`/account/customer/view/234214`}>
              <div className={classes.buttonDetail}>Chi tiết đơn hàng</div>
            </Link>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default CardOrderItem;