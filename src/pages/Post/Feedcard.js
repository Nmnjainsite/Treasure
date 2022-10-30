import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BookmarksOutlined,
  ThumbUpAltOutlined,
  ThumbUp,
  Bookmark,
} from "@mui/icons-material";
import {
  likePost,
  dislikePost,
} from "../../redux-management/features/Post/postServices";
import { toast } from "react-toastify";
import {
  bookmarkPost,
  removeBookmarkPost,
} from "../../redux-management/features/User/userServices";
import { useNavigate } from "react-router-dom";
import Profile from "../../assets/Profile.jpeg";
const Feedcard = ({ post: { _id, img, username, content, likes } }) => {
  const dispatch = useDispatch();
  const { foundUser, token } = useSelector((state) => state.user);
  const likeUser = likes.likedBy.some((el) => el._id === foundUser._id);
  const bookmarkArray = foundUser.bookmarks;
  const loginUserPost = username === foundUser.username;
  const findBookmarkPost = () => {
    if (bookmarkArray) {
      const bookmarkedPost = bookmarkArray.some((el) => el._id === _id);
      return bookmarkedPost;
    }
  };

  const bookmarkHandler = () => {
    if (token) {
      dispatch(bookmarkPost({ token, postId: _id }));
      toast.success("You Bookmarked Post");
    } else {
      navigate("/");
      toast.warn("Please Login Again");
    }
  };

  const removeBookmarkHandler = () => {
    if (token) {
      dispatch(removeBookmarkPost({ token, postId: _id }));
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
      dispatch(likePost({ token, postId: _id }));
      toast.success("You liked Post");
    }
  };

  const dislikeHandler = () => {
    dispatch(dislikePost({ token, postId: _id }));
    toast.success("You disliked Post");
  };
  const date = new Date();
  const finalDate = date.toLocaleDateString();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="post-box-col-2">
          {!loginUserPost && <img src={img} alt="" className="post-img"></img>}
          {loginUserPost && <img src={img} alt="" className="post-img"></img>}

          <span className="post-username">{username}</span>

          <span className="post-date">{finalDate}</span>
          <p style={{ fontSize: "1.2rem", color: "grey" }}>{content}</p>

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
                {likes.likeCount}
              </span>
            </span>
            <span className="post-icons">
              {findBookmarkPost() ? (
                <span>
                  <Bookmark onClick={() => removeBookmarkHandler(_id)} />
                </span>
              ) : (
                <BookmarksOutlined onClick={() => bookmarkHandler(_id)} />
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedcard;
