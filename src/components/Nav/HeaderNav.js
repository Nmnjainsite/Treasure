import React from "react";
import { IconButton, Typography, Toolbar } from "@mui/material";
import { Logout, AccountCircleOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux-management/features/User/userSlice";
import { toast } from "react-toastify";
const HeaderNav = () => {
  const { foundUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <Toolbar
        sx={{
          // position: "fixed",
          display: "flex",
          // width: "100%",
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
          <AccountCircleOutlined
            sx={{ fontSize: 35 }}
            onClick={() => navigate(`/user/${foundUser._id}`)}
          />
        </IconButton>

        <IconButton sx={{ color: "white" }}>
          <Logout sx={{ fontSize: 35 }} onClick={logoutHandler} />{" "}
        </IconButton>
      </Toolbar>
    </>
  );
};

export default HeaderNav;
