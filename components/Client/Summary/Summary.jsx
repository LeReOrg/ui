import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useRecoilValue } from "recoil";
import { useIncomeMonthly } from "../../../hooks/useSummary";
import { userState } from "../../../lib/recoil-root";
import {Box } from '@material-ui/core'
const Summary = () => {
  const user = useRecoilValue(userState);
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
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
  const params = {
    startDate: `${year}-01-01`,
    endDate: `${year}-12-31`,
  };
  const userId = {
    userId: user?.user?._id,
    token: user.token,
  };
  const { data: dataMonth, isLoading } = useIncomeMonthly(params, userId);
  useEffect(() => {
    if (dataMonth) {
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
            callback: function(value, index, values) {
                if(parseInt(value) >= 1000){
                  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +'VNĐ';
                } else {
                  return value + 'VNĐ';
                }
              }
          },
        },
      ],
    },
    tooltips: {
        callbacks: {
            label: function(t, d) {
                var xLabel = d.datasets[t.datasetIndex].label;
                var yLabel = t.yLabel >= 1000 ?
                    t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'VNĐ':
                   t.yLabel + 'VNĐ';
                return xLabel + ': ' + yLabel;
            }
        }
    }
  };
  return (
    <Box>
        <Box>
        <Box><p>Năm nay</p><p>2222222222 đ</p></Box>
            <Box><p>Tháng hiện tại {month}</p><p>2222222222 đ</p></Box>
        </Box>
        <Box>
            <p>Năm {year}</p>
        </Box>
      <Bar data={data} options={options} />
    </Box>
  );
};
export default Summary;
