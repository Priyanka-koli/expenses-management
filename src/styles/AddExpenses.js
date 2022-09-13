import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "30px 10px",
  width: "50%",
  margin: "30px auto",
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
}));
