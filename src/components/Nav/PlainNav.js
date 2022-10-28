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

const PlainNav = () => {
  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          width: "100%",
          borderBottom: "1px solid  #e5e5e5",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#38bdf8",
            fontFamily: `'Pacifico', cursive;`,
            fontSize: 43,
            fontWeight: "bold",
            flexGrow: 1,
          }}
        >
          Treasure
        </Typography>

        <IconButton sx={{ color: "#38bdf8" }}>
          <AccountCircleOutlined sx={{ fontSize: 35 }} />
        </IconButton>
        <IconButton sx={{ color: "#38bdf8", mr: 5 }}>
          <Login sx={{ fontSize: 35 }} />
        </IconButton>
      </Toolbar>
    </>
  );
};

export default PlainNav;
