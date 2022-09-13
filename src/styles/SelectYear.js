import { styled } from "@mui/material/styles";
import { FormControl, Select } from "@mui/material";
export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: "20%",
  [theme.breakpoints.down("md")]: {
    width: "40%",
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  width: "100%",
}));
