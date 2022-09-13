import React, { useState, useEffect } from "react";
import { getExpenseFromApi } from "../../../service/api";
import { Select, MenuItem, InputLabel, FormHelperText } from "@mui/material";
import YearExpensesGrapgh from "./YearExpensesGraph";
import { StyledFormControl, StyledSelect } from "../../../styles/SelectYear";

const SelectYear = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2022");

  const getAllExpense = async () => {
    let { data } = await getExpenseFromApi();
    setExpenses(data);
  };

  //calling api on page load
  useEffect(() => {
    getAllExpense();
  }, []);

  //function to filter values based on selected year by user
  const filteredExpenses = expenses.filter((expense) => {
    let date = new Date(expense.expense_date);
    return selectedYear === date.getFullYear().toString(); //for getting year value 2022,2021....
  });

  //function to handle onChange event on year select dropsown
  const onSelectHandler = (e) => {
    setSelectedYear(e.target.value);
  };
  return (
    <>
      <StyledFormControl>
        <InputLabel>YEAR</InputLabel>
        <StyledSelect
          id="year-select"
          value={selectedYear}
          label="Select"
          onChange={onSelectHandler}
        >
          <MenuItem value="2019">2019</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
        </StyledSelect>
        <FormHelperText>
          Select year from dropdwon to view Barchart
        </FormHelperText>
      </StyledFormControl>
      <YearExpensesGrapgh filteredData={filteredExpenses} />
    </>
  );
};
export default SelectYear;
