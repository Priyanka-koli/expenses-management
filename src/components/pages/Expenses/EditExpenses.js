import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Avatar,
  TextField,
  Grid,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { getExpenseByIdFromApi, editExpenseById } from "../../../service/api";

const INITAIL_VALUES = {
  id: 0,
  expense_title: "",
  expense_amount: "",
  expense_date: "",
};
const EditExpenses = () => {
  const [expense, setExpense] = useState(INITAIL_VALUES);
  const Navigate = useNavigate();
  const { id } = useParams();

  const getExpenseById = async () => {
    let { data } = await getExpenseByIdFromApi(id);
    setExpense(data);
  };

  useEffect(() => {
    getExpenseById();
  }, []);

  const onChangeHandler = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await editExpenseById(expense, id);
    Navigate("/all-expenses");
  };

  return (
    <React.Fragment>
      <Grid sx={{ align: "center" }}>
        <Paper sx={{ padding: "30px 20px", width: "50%", margin: "30px auto" }}>
          <Grid sx={{ align: "center" }}>
            <Avatar sx={{ backgroundColor: "primary", align: "center" }}>
              <CurrencyExchangeIcon sx={{ fontSize: "Medium" }} />
            </Avatar>
            <Typography variant="h4"> Edit Expenses</Typography>
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
              helperText="Please enter expense title"
              margin="normal"
              onChange={onChangeHandler}
              name="expense_title"
              value={expense.expense_title}
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
              helperText="Please enter expense amount"
              margin="normal"
              onChange={onChangeHandler}
              name="expense_amount"
              value={expense.expense_amount}
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
              helperText="Please enter expense date"
              margin="normal"
              onChange={onChangeHandler}
              name="expense_date"
              value={expense.expense_date}
            />
            <Button variant="contained" type="submit" sx={{ color: "primary" }}>
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
      Add expenses page
    </React.Fragment>
  );
};

export default EditExpenses;
