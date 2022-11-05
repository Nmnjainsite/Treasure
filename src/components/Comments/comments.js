import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CommentCard from "./CommentCard";
import {
  addComments,
  editComment,
} from "../../redux-management/features/Post/postServices";
import { useNavigate } from "react-router-dom";
const Comment = ({ post }) => {
  const [commentText, setCommentText] = useState("");
  const [editCommentText, setEditCommentText] = useState(false);
  const [changeComment, setChangeComment] = useState("");
  const newComment = { ...changeComment, text: commentText };
  const { token } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postComment = () => {
    if (commentText) {
      dispatch(addComments({ postId: post._id, token, postData: commentText }));
      setCommentText("");
      toast.success("Comment posted !");
    } else {
      toast.warn("Please put a comment !");
    }
  };
  const editCommentToPost = () => {
    dispatch(
      editComment({
        postId: post._id,
        token,
        commentId: changeComment._id,
        editData: newComment,
      })
    );
    setEditCommentText(false);
    setCommentText("");
    toast.success("edited");
  };

  return (
    <div>
      <TextField
        sx={{ width: "80%" }}
        id="standard-basic"
        label="Drop a comment"
        variant="standard"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      {editCommentText ? (
        <Button
          onClick={editCommentToPost}
          sx={{ width: "20%" }}
          variant="contained"
        >
          Save
        </Button>
      ) : (
        <Button sx={{ width: "20%" }} onClick={postComment} variant="contained">
          Add
        </Button>
      )}
      {post.comments.map((comment) => (
        <CommentCard
          comment={comment}
          post={post}
          commentText={commentText}
          setCommentText={setCommentText}
          setEditCommentText={setEditCommentText}
          setChangeComment={setChangeComment}
        />
      ))}
    </div>
  );
};

export default Comment;
