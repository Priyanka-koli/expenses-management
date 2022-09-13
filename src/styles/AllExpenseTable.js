import { styled } from "@mui/material/styles";
import { TableCell, TableRow, tableCellClasses, Table } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#063970",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export const StyledTable = styled(Table)(({ theme }) => ({
  width: "90%",
  margin: "5% auto",
}));
export const StyledModeEditIcon = styled(ModeEditIcon)(({ theme }) => ({
  fontSize: "1.5rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));
export const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
  fontSize: "1.5rem",
  marginLeft: "2rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    marginLeft: "1rem",
  },
}));
