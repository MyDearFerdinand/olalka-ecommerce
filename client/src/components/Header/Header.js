import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List className={styles.navLinks}>
        <ListItemButton
          component={Link}
          to="/products"
        >
          <ListItemText primary="Our Dolls" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/products"
        >
          <ListItemText primary="New Items" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/about-us"
        >
          <ListItemText primary="About Us" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/contacts"
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
          variant="h2"
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
          >
            {drawer}
          </Drawer>
        </Box>
        <Box className="desktop-nav" sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
          {drawer}
        </Box>

        <Box>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
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
