import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logout from "../Login/Logout";
import PaidIcon from "@mui/icons-material/Paid";
import { useState } from "react";
import HamBurger from "./HamBurger";

const Pages = [
  { label: "Home", url: "/" },
  { label: "Add Expenses", url: "/add-expenses" },
  { label: "All Expenses", url: "/all-expenses" },
  { label: "Yearly Report", url: "/yearly-report" },
  { label: "About Us", url: "/about" },
  { label: "Contact Us", url: "/contact" },
];

const NavBar = () => {
  const [click, setClick] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const clickHandler = (e, value) => {
    setClick(value);
  };
  return (
    <React.Fragment>
      <AppBar position="static" sx={{ backgroundColor: "#063970" }}>
        <Toolbar>
          <PaidIcon
            sx={{ fontSize: "3rem" }}
            onClick={(e) => (window.location.href = "/")}
          />
          {isMatch ? (
            <>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  paddingLeft: "10%",
                }}
              >
                Expenses
              </Typography>
              <HamBurger />
            </>
          ) : (
            <>
              <Typography
                variant="h3"
                sx={{ fontSize: "1.5rem", paddingRight: "1%" }}
              >
                Expenses
              </Typography>

              <Tabs
                textColor="inherit"
                value={click}
                indicatorColor="secondary"
                onChange={clickHandler}
              >
                {Pages.map((pages, index) => {
                  return (
                    <Tab
                      label={pages.label}
                      component={Link}
                      to={pages.url}
                      key={index}
                    ></Tab>
                  );
                })}
              </Tabs>
              <Logout />
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default NavBar;
