import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { StyledBox } from "../../../styles/YearExpenseGraph";

const YearExpensesGrapgh = (props) => {
  const monthArray = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  //updating montheArray based on monthly values - adding value to respective label
  for (const expense of props.filteredData) {
    const date = new Date(expense.expense_date);
    const month = date.getMonth(); //will return month 0 to 11
    //console.log(monthArray[11]); //{label: 'Dec', value: 0}
    monthArray[month].value += Number(expense.expense_amount);
  }

  //fetching label and values from monthArray for adding it to the bar attributes
  const labels = monthArray.map((month) => month.label);
  const dataVal = monthArray.map((dataPoint) => dataPoint.value);
  const ChartData = {
    labels: labels,
    datasets: [
      {
        label: "Expenses",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        overBackgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 1,
        data: dataVal,
      },
    ],
  };

  return (
    <StyledBox>
      <Bar
        data={ChartData}
        option={{
          maintainAspectRatio: false,
          title: {
            dispaly: true,
            text: "Mothly expenses chart",
            fontSize: 23,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontSize: 15,
                  fontColor: "#000",
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontSize: 15,
                  fontColor: "#000",
                },
              },
            ],
          },
        }}
      ></Bar>
    </StyledBox>
  );
};

export default YearExpensesGrapgh;
