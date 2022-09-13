import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
export const StyledBox = styled(Box)(({ theme }) => ({
  width: "70%",
  height: "100%",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));
