import React from "react";
import {
  SentimentDissatisfiedOutlined,
  SentimentVerySatisfied,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  downVoteComment,
  upVoteComment,
} from "../../redux-management/features/Post/postServices";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import "./Comments.css";
import LongMenu from "./MenuItem";
const CommentCard = ({
  setCommentText,
  comment,
  setEditCommentText,
  setChangeComment,
  post,
}) => {
  const { foundUser, token } = useSelector((state) => state.user);
  const loginUserComment = comment.username === foundUser.username;
  const dispatch = useDispatch();

  const upVoteHandler = () => {
    dispatch(
      upVoteComment({
        postId: post._id,
        commentId: comment._id,
        token,
        upVoteData: comment.text,
      })
    );
    toast.success("Upvotes Comment");
  };
  const upVoteBy = comment.votes.upvotedBy.find(
    (el) => el._id === foundUser._id
  );

  const downVoteHandler = () => {
    dispatch(
      downVoteComment({
        postId: post._id,
        commentId: comment._id,
        token,
        downVoteData: comment.text,
      })
    );
    toast.success("You downvote comment");
  };

  const downVoteBy = comment.votes.downvotedBy.find(
    (el) => el._id === foundUser._id
  );

  return (
    <div className="comments-container">
      <div>
        <li className="comments-menu-skin">
          <span>
            {comment.username}{" "}
            <span
              style={{
                fontSize: "1.1rem",
                color: "grey",
                fontWeight: "bold",
                margin: "1%",
                padding: "0.3rem",
                textAlign: "right",
              }}
            >
              {comment.text}
            </span>
          </span>

          <span>
            {loginUserComment && (
              <LongMenu
                comment={comment}
                post={post}
                setChangeComment={setChangeComment}
                setCommentText={setCommentText}
                setEditCommentText={setEditCommentText}
              />
            )}
          </span>
        </li>

        <li className="upvote-downvote">
          <span>
            {upVoteBy ? (
              <SentimentVerySatisfied />
            ) : (
              <BiUpvote onClick={upVoteHandler} />
            )}
          </span>

          <span>
            {" "}
            {downVoteBy ? (
              <SentimentDissatisfiedOutlined />
            ) : (
              <BiDownvote onClick={downVoteHandler} />
            )}
          </span>
        </li>
      </div>
    </div>
  );
};

export default CommentCard;
