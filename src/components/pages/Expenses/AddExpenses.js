import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Grid, Typography, Button } from "@mui/material";
import { addExpenseToApi } from "../../../service/api";
import { StyledPaper } from "../../../styles/AddExpenses";

const INITAIL_VALUES = {
  id: 0,
  expense_title: "",
  expense_amount: "",
  expense_date: "",
};
const AddExpenses = () => {
  const [expense, setExpense] = useState(INITAIL_VALUES);
  const [isTitleEntered, setIsTitleEntered] = useState(true);
  const [isAmountEntered, setIsAmountEntered] = useState(true);
  const [isDateEntered, setIsdateEntered] = useState(true);

  const Navigate = useNavigate();

  /* function to handle text field change  */
  const onChangeHandler = (event) => {
    if (event.target.name === "expense_title") {
      setIsTitleEntered(true);
    }
    if (event.target.name === "expense_amount") {
      setIsAmountEntered(true);
    }
    if (event.target.name === "expense_date") {
      setIsdateEntered(true);
    }
    setExpense({ ...expense, [event.target.name]: event.target.value });
  };

  /* function to handle reset click */
  const resetHandler = (event) => {
    setExpense(INITAIL_VALUES);
  };

  /* function to handle actions after form submit  */
  const submitHandler = async (event) => {
    event.preventDefault();
    expense.expense_title.trim().length === 0 && setIsTitleEntered(false);
    expense.expense_amount.trim().length === 0 && setIsAmountEntered(false);
    expense.expense_date.trim().length === 0 && setIsdateEntered(false);

    if (
      expense.expense_title.trim().length === 0 ||
      expense.expense_amount.trim().length === 0 ||
      expense.expense_date.trim().length === 0
    ) {
      return;
    }
    if (expense.expense_title === "") {
      setIsTitleEntered(false);
      return;
    }
    await addExpenseToApi(expense);
    Navigate("/all-expenses");
  };

  return (
    <React.Fragment>
      <Grid>
        <StyledPaper>
          <Grid sx={{ align: "center" }}>
            <Typography variant="h4"> Add Expenses</Typography>
            <Typography variant="caption">
              Please fill this form to add your expenses
            </Typography>
          </Grid>
          <form onSubmit={submitHandler}>
            <TextField
              fullWidth
              id="expense-title"
              label="Expense Title"
              variant="filled"
              margin="normal"
              onChange={onChangeHandler}
              name="expense_title"
              value={expense.expense_title}
              error={!isTitleEntered}
              helperText={
                !isTitleEntered
                  ? "Expense title is required"
                  : "Enter expense title"
              }
            />
            <TextField
              id="expense-amount"
              label="Expense Amount"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              fullWidth
              margin="normal"
              onChange={onChangeHandler}
              name="expense_amount"
              value={expense.expense_amount}
              error={!isAmountEntered}
              helperText={
                !isAmountEntered
                  ? "Expense amount is required"
                  : "Enter expense amount"
              }
            />
            <TextField
              id="expense-date"
              label="Expense Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              fullWidth
              margin="normal"
              onChange={onChangeHandler}
              name="expense_date"
              value={expense.expense_date}
              error={!isDateEntered}
              helperText={
                !isDateEntered
                  ? "Expense date is required"
                  : "Enter expense date"
              }
            />
            <Button variant="contained" type="submit" sx={{ color: "primary" }}>
              Submit
            </Button>
            <Button
              variant="contained"
              onClick={resetHandler}
              type="reset"
              sx={{ color: "primary", marginLeft: "2rem" }}
            >
              Reset
            </Button>
          </form>
        </StyledPaper>
      </Grid>
    </React.Fragment>
  );
};

export default AddExpenses;
