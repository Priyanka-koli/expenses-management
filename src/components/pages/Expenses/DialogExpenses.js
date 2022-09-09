import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  imageListClasses,
  Typography,
} from "@mui/material";

const DialogExpenses = (props) => {
  const { open, onClose, data } = props;
  if (!open) return null;

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Expense Summary:</DialogTitle>
        <DialogContent dividers>
          <Typography>Expense Title : {data.expense_title} </Typography>
          <Typography>Expense Amount : {data.expense_amount} </Typography>
          <Typography>Expense Date : {data.expense_date} </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogExpenses;
