import React from "react";
import { getLayout } from "../../../container/ProfileContainer";
import { Bar } from "react-chartjs-2";
const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Red Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "# of Blue Votes",
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: "rgb(54, 162, 235)",
    },
  ],
};
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const Summary = () => {
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

Summary.getLayout = getLayout;
export default Summary;
