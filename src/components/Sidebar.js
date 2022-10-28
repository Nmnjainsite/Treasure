import React, { useState } from "react";
import "./sidebar.css";
import cover from "../assets/cover.jpg";
import Profile from "../assets/Profile.jpeg";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../redux-management/features/Post/postServices";
import { toast } from "react-toastify";

const Sidebar = ({ user }) => {
  const { foundUser, token } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [postItem, setPostItem] = useState("");
  const dispatch = useDispatch();

  const createPostHandler = () => {
    if (token) {
      dispatch(createPost({ token, postData: postItem }));
      toast.success("Created A New Post");
    } else {
      toast.warn("Let's Login Again");
      navigate("/");
    }
  };

  return (
    <div className="sidebar-box">
      <div className="img-container">
        <img
          src={Profile}
          alt=""
          className="sidebar-img-2"
          onClick={() => navigate(`/user/${foundUser._id}`)}
        ></img>
        <span className="founduser-name">
          {foundUser.firstName} {foundUser.lastName} | Web Developer
          <p>
            <span>
              {foundUser.followers.length}{" "}
              <span style={{ margin: "0.1rem" }}>Followers</span>
            </span>

            <span style={{ margin: "0.8rem" }}>
              {foundUser.following.length} Followings
            </span>
          </p>
        </span>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <div>
        <TextField
          label="Create Post"
          autoFocus
          sx={{ width: "70%" }}
          onChange={(e) => setPostItem(e.target.value)}
        />
      </div>

      <Button
        sx={{ width: "30%", mt: 2 }}
        variant="contained"
        onClick={createPostHandler}
      >
        Post
      </Button>
    </div>
  );
};

export default Sidebar;
