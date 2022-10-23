import React from "react";
import "./sidebar.css";
import cover from "../assets/cover.jpg";
import Profile from "../assets/Profile.jpeg";
import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const { foundUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div className="sidebar-box">
      <img src={cover} alt="" className="sidebar-img"></img>
      <div>
        <span>Follower</span>
        <img
          src={Profile}
          alt=""
          className="sidebar-img"
          onClick={() => navigate(`/user/${foundUser._id}`)}
        ></img>
        <span>Following</span>
      </div>
      <p>
        {foundUser.firstName} {foundUser.lastName} | Web Developer
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur</p>

      <div>
        <TextField label="Thoughts" autoFocus sx={{ width: "70%" }} />
      </div>

      <Button sx={{ width: "70%", mt: 2 }} variant="contained">
        Post
      </Button>
    </div>
  );
};

export default Sidebar;
