import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  tableCellClasses,
  TextField,
  Box,
  Button,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getExpenseFromApi, deleteExpenseById } from "../../../service/api";
import { useNavigate } from "react-router-dom";
import TotalExpense from "./TotalExpenses";
import DialogExpenses from "./DialogExpenses";
import { addExpenseToApi } from "../../../service/api";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#063970",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const INITAIL_VALUES = {
  id: 0,
  expense_title: "",
  expense_amount: "",
  expense_date: "",
};

export default function AllExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [expenseDetails, setExpenseDetails] = useState([]);
  const [newExpenseEntry, setNewExpenseEntry] = useState(expenses);

  //for validation
  const [isTitleEntered, setIsTitleEntered] = useState(true);
  const [isAmountEntered, setIsAmountEntered] = useState(true);
  const [isDateEntered, setIsdateEntered] = useState(true);

  const Navigate = useNavigate();
  /* calling getExpenseFromApi */
  const getAllExpense = async () => {
    let { data } = await getExpenseFromApi();
    setExpenses(data);
  };

  useEffect(() => {
    getAllExpense();
  }, []);

  const deleteExpenseHandler = async (id) => {
    await deleteExpenseById(id);
    getAllExpense();
  };

  const editExpenseHandler = (id) => {
    Navigate(`/edit-expenses/${id}`);
  };

  const openDailogHandler = (expenseData) => {
    setOpenDialog(true);
    setExpenseDetails(expenseData);
  };

  //calculating total of expenses
  const totalAmount = expenses.reduce((acc, amount) => {
    return (acc += Number(amount["expense_amount"]));
  }, 0);

  //function to handle table dynamic entry change
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
    setNewExpenseEntry({
      ...newExpenseEntry,
      [event.target.name]: event.target.value,
    });
  };

  //function to handle table submit entry
  const addHandler = async (event) => {
    !newExpenseEntry.expense_title && setIsTitleEntered(false);
    !newExpenseEntry.expense_amount && setIsAmountEntered(false);
    !newExpenseEntry.expense_date && setIsdateEntered(false);

    if (
      !newExpenseEntry.expense_title ||
      !newExpenseEntry.expense_amount ||
      !newExpenseEntry.expense_date
    ) {
      return;
    }
    await addExpenseToApi(newExpenseEntry);
    getAllExpense();
  };

  return (
    <>
      <Box>
        <TableContainer component={Paper}>
          <Table
            sx={{ maxWidth: 900, margin: "5% auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="center">Title</StyledTableCell>
                <StyledTableCell align="center">Amount($)</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow key="expense-entry">
                <StyledTableCell scope="row">Entry</StyledTableCell>
                <StyledTableCell align="center">
                  <TextField
                    type="text"
                    onChange={onChangeHandler}
                    name="expense_title"
                    error={!isTitleEntered}
                  ></TextField>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <TextField
                    type="number"
                    onChange={onChangeHandler}
                    name="expense_amount"
                    error={!isAmountEntered}
                  ></TextField>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <TextField
                    type="date"
                    onChange={onChangeHandler}
                    name="expense_date"
                    error={!isDateEntered}
                  ></TextField>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ color: "primary" }}
                    onClick={addHandler}
                  >
                    <AddCircleIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
              {expenses.map((expense) => (
                <StyledTableRow key={expense.name}>
                  <StyledTableCell component="th" scope="row">
                    {expense.id}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    onClick={() => openDailogHandler(expense)}
                  >
                    {expense.expense_title}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {expense.expense_amount}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {expense.expense_date}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ModeEditIcon
                      sx={{ fontsize: "Medium", color: "#06397" }}
                      onClick={() => editExpenseHandler(expense.id)}
                    />
                    <DeleteIcon
                      sx={{
                        fontsize: "Medium",
                        color: "#06397",
                        marginLeft: "2rem",
                      }}
                      onClick={() => deleteExpenseHandler(expense.id)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {<TotalExpense expenseTotal={totalAmount}></TotalExpense>}
        <DialogExpenses
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          data={expenseDetails}
        ></DialogExpenses>
      </Box>
    </>
  );
}
