import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
export const GraphContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}));
