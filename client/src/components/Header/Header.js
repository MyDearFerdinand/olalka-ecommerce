import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  InputBase,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import { List, ListItemText } from "@mui/material";
import styles from "./Header.module.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search button clicked");
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List className={styles.navLinks}>
        <ListItemButton
          component={Link}
          to="/products"
          onClose={handleDrawerToggle}
        >
          <ListItemText primary="Our Dolls" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/products"
          onClose={handleDrawerToggle}
        >
          <ListItemText primary="New Items" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/about-us"
          onClose={handleDrawerToggle}
        >
          <ListItemText primary="About Us" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/contacts"
          onClose={handleDrawerToggle}
        >
          <ListItemText primary="Contacts" />
        </ListItemButton>
      </List>
    </div>
  );

  return (
    <AppBar position="static" color="default">
      <Toolbar className={styles.Toolbar}>
        <Typography
          variant="h3"
          component={Link}
          to="/"
          className={styles.pageName}
        >
          Olalka
        </Typography>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            PaperProps={{ style: { height: "15%", maxHeight: "90px" } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          className={styles.desktopNav}
          sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}
        >
          {drawer}
        </Box>

        <Box>
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            className={styles.searchInput}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="start"
                  aria-label="search"
                  onClick={handleSearch}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <IconButton component={Link} to="/cart" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton component={Link} to="/account" color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
