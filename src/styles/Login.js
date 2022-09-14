import { styled } from "@mui/material/styles";
import { Paper, Avatar } from "@mui/material";
export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "30px 10px",
  width: "50%",
  margin: "auto auto",
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: "auto",
}));
