import React, { useEffect, useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { useRecoilValue } from "recoil";
import { useIncomeMonthly, useIncomeList } from "../../../hooks/useSummary";
import { userState } from "../../../lib/recoil-root";
import {
  Box,
  ClickAwayListener,
  Popper,
  Button,
  Grow,
  Paper,
  MenuList,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styles from "./SummaryStyled";
import moment from "moment";
const Summary = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = (event, value) => {
    setOpen(false);
  };

  const user = useRecoilValue(userState);
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const parseMonth = `${month < 10 ? `0${month}` : month}`;
  const [title, setTitle] = useState(year);
  const [month1, setMonth1] = useState({ isHave: false, value: 0 });
  const [month2, setMonth2] = useState({ isHave: false, value: 0 });
  const [month3, setMonth3] = useState({ isHave: false, value: 0 });
  const [month4, setMonth4] = useState({ isHave: false, value: 0 });
  const [month5, setMonth5] = useState({ isHave: false, value: 0 });
  const [month6, setMonth6] = useState({ isHave: false, value: 0 });
  const [month7, setMonth7] = useState({ isHave: false, value: 0 });
  const [month8, setMonth8] = useState({ isHave: false, value: 0 });
  const [month9, setMonth9] = useState({ isHave: false, value: 0 });
  const [month10, setMonth10] = useState({ isHave: false, value: 0 });
  const [month11, setMonth11] = useState({ isHave: false, value: 0 });
  const [month12, setMonth12] = useState({ isHave: false, value: 0 });
  const [params, setParams] = useState({
    startDate: `${year}-01-01`,
    endDate: `${year}-12-31`,
  });
  const [paramsCurrentMonth, setParamsCurrentMonth] = useState({
    startDate: `${year}-${parseMonth}-01`,
    endDate: `${year}-${parseMonth}-${month === 2 ? "29" : "31"}`,
  });
  const totalMount =
    month1.value +
    month2.value +
    month3.value +
    month4.value +
    month5.value +
    month6.value +
    month7.value +
    month8.value +
    month9.value +
    month10.value +
    month11.value +
    month12.value;
  const userId = {
    userId: user?.user?._id,
    token: user.token,
  };
  const { data: orderList } = useIncomeList(params, userId);
  const { data: dataMonth, isLoading } = useIncomeMonthly(params, userId);
  const { data: dataCurrentMonth } = useIncomeMonthly(
    paramsCurrentMonth,
    userId
  );
  useEffect(() => {
    if (dataMonth && dataMonth.docs.length > 0) {
      dataMonth?.docs.map((item, index) => {
        switch (item.timestamp.substr(5, 2)) {
          case "01":
            setMonth1({
              isHave: true,
              value: item.amount,
            });
            break;
          case "02":
            setMonth2({
              isHave: true,
              value: item.amount,
            });
            break;
          case "03":
            setMonth3({
              isHave: true,
              value: item.amount,
            });
            break;
          case "04":
            setMonth4({
              isHave: true,
              value: item.amount,
            });
            break;
          case "05":
            setMonth5({
              isHave: true,
              value: item.amount,
            });
            break;
          case "06":
            setMonth6({
              isHave: true,
              value: item.amount,
            });
            break;
          case "07":
            setMonth7({
              isHave: true,
              value: item.amount,
            });
            break;
          case "08":
            setMonth8({
              isHave: true,
              value: item.amount,
            });
            break;
          case "09":
            setMonth9({
              isHave: true,
              value: item.amount,
            });
            break;
          case "10":
            setMonth10({
              isHave: true,
              value: item.amount,
            });
            break;
          case "11":
            setMonth11({
              isHave: true,
              value: item.amount,
            });
            break;
          case "12":
            setMonth12({
              isHave: true,
              value: item.amount,
            });
            break;
          default:
            break;
        }
      });
    } else {
      setMonth1({
        isHave: false,
        value: 0,
      });
      setMonth2({
        isHave: false,
        value: 0,
      });
      setMonth3({
        isHave: false,
        value: 0,
      });
      setMonth4({
        isHave: false,
        value: 0,
      });
      setMonth5({
        isHave: false,
        value: 0,
      });
      setMonth6({
        isHave: false,
        value: 0,
      });
      setMonth7({
        isHave: false,
        value: 0,
      });
      setMonth8({
        isHave: false,
        value: 0,
      });
      setMonth9({
        isHave: false,
        value: 0,
      });
      setMonth10({
        isHave: false,
        value: 0,
      });
      setMonth11({
        isHave: false,
        value: 0,
      });
      setMonth12({
        isHave: false,
        value: 0,
      });
    }
  }, [dataMonth]);
  const data = {
    labels: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    datasets: [
      {
        label: "Doanh thu (VNĐ)",
        data: [
          month1.isHave && month1.value,
          month2.isHave && month2.value,
          month3.isHave && month3.value,
          month4.isHave && month4.value,
          month5.isHave && month5.value,
          month6.isHave && month6.value,
          month7.isHave && month7.value,
          month8.isHave && month8.value,
          month9.isHave && month9.value,
          month10.isHave && month10.value,
          month11.isHave && month11.value,
          month12.isHave && month12.value,
        ],
        backgroundColor: "#FA8C16",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              if (parseInt(value) >= 1000) {
                return (
                  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "VNĐ"
                );
              } else {
                return value + "VNĐ";
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (t, d) {
          var xLabel = d.datasets[t.datasetIndex].label;
          var yLabel =
            t.yLabel >= 1000
              ? t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                "VNĐ"
              : t.yLabel + "VNĐ";
          return xLabel + ": " + yLabel;
        },
      },
    },
  };
  const handleClick = (event, value) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    const { textContent } = event.target;
    const getYearDropdown = parseInt(textContent.slice(-4));
    setParams((preState) => ({
      ...preState,
      startDate: `${getYearDropdown}-01-01`,
      endDate: `${getYearDropdown}-12-31`,
    }));
    setParamsCurrentMonth((preState) => ({
      ...preState,
      startDate: `${getYearDropdown}-${parseMonth}-01`,
      endDate: `${getYearDropdown}-${parseMonth}-${month === 2 ? "29" : "31"}`,
    }));
    setTitle(textContent);
    setOpen(false);
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };
  console.log(orderList);
  const renderOrder = () =>
    orderList?.docs?.map((item, index) => (
      <>
        <Grid item lg={8} md={8}>
          <Grid container>
            <Grid item lg={3} md={3}>
              <p className={classes.time}>{moment(item.createdAt).format("hh:mm:ss")}</p>
              <p  className={classes.date}>{moment(item.createdAt).format("DD/MM/YYYY")}</p>
            </Grid>
            <Grid item lg={9} md={9} className={classes.secondRow}>
              <Box>Doanh thu từ đơn hàng #{item._id}</Box>
              <Box>Thuê từ {item._id}</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} md={4}>
          <Box align="right" className={classes.thridRow}>
            + {item.lessorEarned.toLocaleString("en-US")}
          </Box>
        </Grid>
        <hr />
      </>
    ));
  return (
    <Box className={classes.summaryContainer}>
      <Box className={classes.summaryMoneyYear}>
        <Box className={classes.summaryMoney}>
          <Box className={classes.currentYear}>
            <p>Năm nay</p>
            <p>{totalMount.toLocaleString("en-US")} đ</p>
          </Box>
          <Box className={classes.currentMonth}>
            <p>Tháng hiện tại {month}</p>
            <p>
              {dataCurrentMonth?.docs.length > 0
                ? dataCurrentMonth?.docs[0]?.amount?.toLocaleString("en-US")
                : 0}{" "}
              đ
            </p>
          </Box>
        </Box>
        <Box>
          <Button
            ref={anchorRef}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ textTransform: "none", letterSpacing: 0 }}
            aria-controls={open ? "menu-list-grow" : undefined}
          >
            {`${title == year ? "Năm:" : ""} ${title}`}
            {!open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </Button>

          <Popper
            open={open}
            anchorEl={anchorRef.current}
            style={{
              zIndex: 2,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "4px",
            }}
            role={undefined}
            transition
            placement={"bottom-end"}
          >
            {({ TransitionProps, placement }) => (
              <Grow {...TransitionProps} style={{}}>
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <div
                        onClick={(e) => handleClick(e)}
                        className={classes.yearDropDown}
                      >
                        Năm: {year}
                      </div>
                      <div
                        onClick={(e) => handleClick(e)}
                        className={classes.yearDropDown}
                      >
                        Năm: {year - 1}
                      </div>
                      <div
                        onClick={(e) => handleClick(e)}
                        className={classes.yearDropDown}
                      >
                        Năm: {year - 2}
                      </div>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Box>
      </Box>
      <Bar height="80px" width="200px" data={data} options={options} />
      <Box className={classes.transactionList}>
        <p className={classes.transactionListRecent}>Các giao dịch gần đây</p>
        <Box className={classes.transactionListRecentTable}>
          <Grid container>
            <Grid item lg={8} md={8}>
              <Grid container>
                <Grid item lg={3} md={3}>
                  Thời gian
                </Grid>
                <Grid item lg={9} md={9}>
                  Sản phẩm
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={4}>
              <Box align="right">Số tiền (đ)</Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.transactionListTableContent}>
          <Grid container>{orderList && renderOrder()}</Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default Summary;
