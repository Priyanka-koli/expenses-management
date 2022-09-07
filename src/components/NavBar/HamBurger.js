import React, { useState } from "react";
import {
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

/* const Pages = [
  "Add Expenses",
  "All Expenses",
  "About US",
  "Contact US",
  "Login",
  "Sign Up",
]; */
const Pages = [
  { label: "Add Expenses", url: "/add-expense" },
  { label: "All Expenses", url: "/all-expense" },
  { label: "About Us", url: "/about" },
  { label: "Contact Us", url: "/contact" },
  { label: "Login", url: "/login" },
  { label: "Sign Up", url: "/signup" },
];

const HamBurger = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {Pages.map((page, index) => {
            return (
              <ListItemButton
                key={index}
                onClick={() => setOpenDrawer(!openDrawer)}
                component={Link}
                to={page.url}
              >
                <ListItemIcon>
                  <ListItemText>{page.label}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>

      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
    </React.Fragment>
  );
};

export default HamBurger;
