"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Button, Container, Modal, Switch } from "@mui/material";
import Register from "@/app/Login";

const pages = ["Home", "Shop", "Products", "Blog", "Page"];

export default function NavBar({ toggleDarkMode, darkMode }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {pages?.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ pb: "10px" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ py: "10px" }}>
            {" "}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              E-Commerce
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages?.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages?.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 4,
                    color: darkMode ? "#ffffff" : "#000000",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <SearchIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleOpenModal}
              >
                <Badge badgeContent={0} color="error">
                  <PersonOutlineIcon/>
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                aria-label="show add to cart"
                color="inherit"
              >
                <Badge
                  badgeContent={2}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "black",
                    },
                  }}
                >
                  <LocalMallIcon />
                </Badge>
              </IconButton>

              <Switch
                checked={darkMode}
                onChange={toggleDarkMode}
                inputProps={{ "aria-label": "toggle dark mode" }}
              />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Register />
        </Box>
      </Modal>
    </>
  );
}
