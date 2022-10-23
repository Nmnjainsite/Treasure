import React from "react";
import {
  IconButton,
  Typography,
  Toolbar,
  Grid,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { Login, Logout, AccountCircleOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HeaderNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <Toolbar
        sx={{
          position: "fixed",
          display: "flex",
          width: "100%",
          zindex: "1",
          bgcolor: "#38bdf8",
        }}
      >
        <Typography
          onClick={() => navigate("/home")}
          variant="h6"
          sx={{
            color: "white",
            fontFamily: `'Pacifico', cursive;`,
            fontSize: 43,
            fontWeight: "lighter",
            flexGrow: 1,
            cursor: "pointer",
          }}
        >
          Treasure
        </Typography>

        <IconButton sx={{ color: "white" }}>
          <AccountCircleOutlined sx={{ fontSize: 35 }} />
        </IconButton>
        <IconButton sx={{ color: "white", mr: 5 }}>
          <Login sx={{ fontSize: 35 }} />
        </IconButton>
      </Toolbar>
    </>
  );
};

export default HeaderNav;
