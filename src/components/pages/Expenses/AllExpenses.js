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
} from "@mui/material";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getExpenseFromApi, deleteExpenseById } from "../../../service/api";
import { useNavigate } from "react-router-dom";

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

export default function AllExpenses() {
  const [expenses, setExpenses] = useState([]);
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

  return (
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
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <StyledTableRow key={expense.name}>
              <StyledTableCell component="th" scope="row">
                {expense.id}
              </StyledTableCell>
              <StyledTableCell align="center">
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
              </StyledTableCell>
              <StyledTableCell align="center">
                <DeleteIcon
                  sx={{ fontsize: "Medium", color: "#06397" }}
                  onClick={() => deleteExpenseHandler(expense.id)}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
