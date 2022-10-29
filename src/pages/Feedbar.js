import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Collapse from "@mui/material/Collapse";
import {
  BookmarksOutlined,
  ThumbUpAltOutlined,
  CommentOutlined,
  ThumbUp,
  Bookmark,
} from "@mui/icons-material";
import {
  likePost,
  dislikePost,
} from "../redux-management/features/Post/postServices";
import { toast } from "react-toastify";
import {
  bookmarkPost,
  removeBookmarkPost,
} from "../redux-management/features/User/userServices";
import { useNavigate } from "react-router-dom";
import Comment from "../components/Comments/comments";
import Profile from "../assets/Profile.jpeg";
import EditPost from "./Post/EditPost";
const Feedbar = ({ post }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();
  const { foundUser, token } = useSelector((state) => state.user);
  const likeUser = post.likes.likedBy.some((el) => el._id === foundUser._id);
  const bookmarkArray = foundUser.bookmarks;
  const loginUserPost = post.username === foundUser.username;
  const findBookmarkPost = () => {
    if (bookmarkArray) {
      const bookmarkedPost = bookmarkArray.some((el) => el._id === post._id);
      return bookmarkedPost;
    }
  };

  const bookmarkHandler = () => {
    if (token) {
      dispatch(bookmarkPost({ token, postId: post._id }));
      toast.success("You Bookmarked Post");
    } else {
      navigate("/");
      toast.warn("Please Login Again");
    }
  };

  const removeBookmarkHandler = () => {
    if (token) {
      dispatch(removeBookmarkPost({ token, postId: post._id }));
      toast.success("Your Unbookmarked Post");
    } else {
      navigate("/");
      toast.warn("Please Login Again");
    }
  };

  const likeHandler = () => {
    if (!token) {
      toast.error("Please Login Again");
      navigate("/");
    } else {
      dispatch(likePost({ token, postId: post._id }));
      toast.success("You liked Post");
    }
  };

  const dislikeHandler = () => {
    dispatch(dislikePost({ token, postId: post._id }));
    toast.success("You disliked Post");
  };
  const date = new Date();
  const finalDate = date.toLocaleDateString();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="post-box-col-2">
          {!loginUserPost && (
            <img src={post.pic} alt="" className="post-img"></img>
          )}
          {loginUserPost && (
            <img
              src={Profile}
              alt=""
              className="post-img"
              onClick={() => navigate(`/user/${foundUser._id}`)}
            ></img>
          )}

          <span className="post-username">{post.username}</span>
          <span className="post-edit-icon">
            {loginUserPost && <EditPost post={post} />}
          </span>
          <span className="post-date">{finalDate}</span>
          <p style={{ fontSize: "1.2rem", color: "grey" }}>{post.content}</p>
          {loginUserPost && (
            <img
              alt=""
              src={post.pic}
              style={{
                width: "50%",
                padding: "1rem",
                marginLeft: "20%",
                borderRadius: "0.5rem",
              }}
            ></img>
          )}

          <div>
            <span className="post-icons">
              {likeUser ? (
                <span>
                  {" "}
                  <ThumbUp onClick={dislikeHandler} />
                </span>
              ) : (
                <ThumbUpAltOutlined onClick={likeHandler} />
              )}

              <span
                style={{
                  position: "relative",
                  top: "-0.1rem",
                  left: "0.3rem",
                }}
              >
                {post.likes.likeCount}
              </span>
            </span>
            <span className="post-icons">
              {findBookmarkPost() ? (
                <span>
                  <Bookmark onClick={() => removeBookmarkHandler(post._id)} />
                </span>
              ) : (
                <BookmarksOutlined onClick={() => bookmarkHandler(post._id)} />
              )}
            </span>
            <span className="post-icons">
              <CommentOutlined
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                className="cursor"
              />

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <p>
                  <Comment post={post} />{" "}
                </p>
              </Collapse>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedbar;
