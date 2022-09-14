import React, { useEffect, useState } from "react";
import {
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Box,
  Button,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import {
  getExpenseFromApi,
  deleteExpenseById,
  addExpenseToApi,
  editExpenseById,
} from "../../../service/api";
import TotalExpense from "./TotalExpenses";
import DialogExpenses from "./DialogExpenses";
import GenerateReports from "../Pdfs/GenerateReports";
import {
  StyledTableCell,
  StyledTableRow,
  StyledTable,
  StyledDeleteIcon,
  StyledModeEditIcon,
} from "../../../styles/AllExpenseTable";
//import EditExpenses from "./EditExpenses";

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
  //for table field entries
  const [newExpenseEntry, setNewExpenseEntry] = useState(expenses);

  const [edittedExpenses, setEdittedExpenses] = useState(INITAIL_VALUES);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [editRowId, setEditRowId] = useState(0);

  //for validation
  const [isTitleEntered, setIsTitleEntered] = useState(true);
  const [isAmountEntered, setIsAmountEntered] = useState(true);
  const [isDateEntered, setIsdateEntered] = useState(true);

  //const Navigate = useNavigate();

  /* calling getExpenseFromApi */
  const getAllExpense = async () => {
    let { data } = await getExpenseFromApi();
    setExpenses(data);
  };

  useEffect(() => {
    getAllExpense();
  }, []);

  //for deleting table entry
  const deleteExpenseHandler = async (id) => {
    await deleteExpenseById(id);
    getAllExpense();
  };

  //for editting table entry
  const editExpenseHandler = (expenseData) => {
    setIsEditClicked(true);
    setEditRowId(expenseData.id);
    setEdittedExpenses(expenseData);
    //Navigate(`/edit-expenses/${id}`);
  };

  const editInputChangeHandler = (event) => {
    setEdittedExpenses({
      ...edittedExpenses,
      [event.target.name]: event.target.value,
    });
  };

  const saveExpenseHandler = async (id) => {
    await editExpenseById(edittedExpenses, id);
    setIsEditClicked(false);
    getAllExpense();
    setEdittedExpenses(INITAIL_VALUES);
  };

  //for opening dialog box on respective entry
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
    //after submitting setting input filed values to empty
    setNewExpenseEntry(INITAIL_VALUES);
  };

  return (
    <>
      <Box>
        <GenerateReports data={expenses} />
        <TableContainer component={Paper}>
          <StyledTable>
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
                    placeholder="Enter Expense Title"
                    type="text"
                    onChange={onChangeHandler}
                    name="expense_title"
                    error={!isTitleEntered}
                    value={newExpenseEntry.expense_title}
                  ></TextField>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <TextField
                    placeholder="Enter Expense Amount"
                    type="number"
                    onChange={onChangeHandler}
                    name="expense_amount"
                    error={!isAmountEntered}
                    value={newExpenseEntry.expense_amount}
                  ></TextField>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <TextField
                    type="date"
                    onChange={onChangeHandler}
                    name="expense_date"
                    error={!isDateEntered}
                    value={newExpenseEntry.expense_date}
                  ></TextField>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ color: "secondary" }}
                    onClick={addHandler}
                  >
                    <AddCircleIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
              {expenses.map((expense) => (
                <StyledTableRow key={expense.id}>
                  <StyledTableCell component="th" scope="row">
                    {expense.id}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    onClick={() => openDailogHandler(expense)}
                  >
                    {editRowId === expense.id && isEditClicked === true ? (
                      <TextField
                        input
                        type="text"
                        onChange={editInputChangeHandler}
                        name="expense_title"
                        value={edittedExpenses.expense_title}
                      ></TextField>
                    ) : (
                      expense.expense_title
                    )}
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    {editRowId === expense.id && isEditClicked === true ? (
                      <TextField
                        input
                        type="number"
                        onChange={editInputChangeHandler}
                        name="expense_amount"
                        value={edittedExpenses.expense_amount}
                      ></TextField>
                    ) : (
                      expense.expense_amount
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {editRowId === expense.id && isEditClicked == true ? (
                      <TextField
                        input
                        type="date"
                        onChange={editInputChangeHandler}
                        name="expense_date"
                        value={edittedExpenses.expense_date}
                      ></TextField>
                    ) : (
                      expense.expense_date
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {editRowId === expense.id && isEditClicked === true ? (
                      <DoneOutlineIcon
                        sx={{ fontsize: "small", color: "#06397" }}
                        onClick={() => saveExpenseHandler(expense.id)}
                      />
                    ) : (
                      <>
                        <StyledModeEditIcon
                          onClick={() => editExpenseHandler(expense)}
                        />
                        <StyledDeleteIcon
                          onClick={() => deleteExpenseHandler(expense.id)}
                        />
                      </>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </StyledTable>
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
