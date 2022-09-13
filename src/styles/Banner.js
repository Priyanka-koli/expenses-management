import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
export const BannerContainer = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  width: "100%",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  position: "absolute",
  top: "15rem",
  left: "28rem",
  [theme.breakpoints.between("md", "lg")]: {
    top: "9rem",
    left: "16rem",
  },
  [theme.breakpoints.between("sm", "md")]: {
    top: "9rem",
    left: "10rem",
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    top: "10rem",
    left: "4rem",
  },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  lineHeight: "1.25",
  marginBottom: "20px",
  textTransform: "uppercase",
  fontWeight: "bolder",
  color: theme.palette.common.white,
  textShadow: "3px 6px 2px rgba(100 , 100 , 100)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
    lineHeight: "1",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  fontSize: "70px",
  lineHeight: "1.25",
  marginBottom: "20px",
  color: theme.palette.common.white,
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
    lineHeight: "1",
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  //backgroundImage: `url${src} , linear-gradient(to bottom right , rgba(#e66465, 1) , rgba( #9198e5, 0.6))`,
  // src: `url${src}`,
  height: `calc(100vh - 70px)`,
  width: "100%",
  clipPath: `polygon(0 0,100% 0,100% 90%,0 100%)`,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
