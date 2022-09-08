import React from "react";
import { Typography } from "@mui/material";

const TotalExpense = (props) => {
  return (
    <React.Fragment>
      {props.expenseTotal > 0 && (
        <>
          <Typography variant="h5"> Total Amount Spent</Typography>
          <Typography variant="p"> ${props.expenseTotal}</Typography>
        </>
      )}
    </React.Fragment>
  );
};

export default TotalExpense;
