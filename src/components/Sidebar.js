import React, { useState, useEffect } from "react";
import "./sidebar.css";
import cover from "../assets/cover.jpg";
import Profile from "../assets/Profile.jpeg";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../redux-management/features/Post/postServices";
import { toast } from "react-toastify";
import { IconButton } from "@mui/material";
import { PhotoAlbum, PhotoCamera } from "@mui/icons-material";
const Sidebar = ({ user }) => {
  const { foundUser, token } = useSelector((state) => state.user);
  const { allPost } = useSelector((state) => state.post);
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [pic, setPic] = useState("");
  const dispatch = useDispatch();

  const createPostHandler = () => {
    if (content) {
      dispatch(createPost({ token, postData: { content, pic } }));
      toast.success("Created A New Post");
      setPic("");
      setContent("");
    } else {
      toast.warn("Please fill the input fields !");
    }
  };

  const handleImage = (e) => {
    setPic(URL.createObjectURL(e.target.files[0]));
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
              <span style={{ margin: "0.1rem" }}>
                {foundUser.followers.length > 1 ? (
                  <span>Followers</span>
                ) : (
                  <span>Follower</span>
                )}
              </span>
            </span>

            <span style={{ margin: "0.8rem" }}>
              {foundUser.following.length}{" "}
              {foundUser.following.length > 1 ? (
                <span>Followings</span>
              ) : (
                <span>Following</span>
              )}
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
          onChange={(e) => setContent(e.target.value)}
        />
      </div>{" "}
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        sx={{ mr: "35%", mt: 2 }}
      >
        <input hidden accept="image/*" type="file" onChange={handleImage} />
        <PhotoCamera />
      </IconButton>
      <Button
        sx={{ width: "20%", mt: 2 }}
        variant="contained"
        onClick={createPostHandler}
      >
        Post
      </Button>
      {pic && <img src={pic} alt="" className="selected-img"></img>}
    </div>
  );
};

export default Sidebar;
