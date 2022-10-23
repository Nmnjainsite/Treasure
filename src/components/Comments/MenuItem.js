import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../redux-management/features/Post/postServices";
import { editComment } from "../../redux-management/features/Post/postServices";
import { toast } from "react-toastify";

const ITEM_HEIGHT = 48;

export default function LongMenu({
  setCommentText,
  comment,
  setEditCommentText,
  setChangeComment,
  post,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { foundUser, token } = useSelector((state) => state.user);
  const loginUserComment = comment.username === foundUser.username;
  const dispatch = useDispatch();
  const editCommentHandler = () => {
    setEditCommentText(true);
    setCommentText(comment.text);
    setChangeComment(comment);
  };
  const deleteHandler = () => {
    dispatch(
      deleteComment({
        postId: post._id,
        commentId: comment._id,
        deleteData: comment.text,
        token,
      })
    );
    toast.success("Comment Deleted");
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <span>
            {loginUserComment && <span onClick={deleteHandler}>Delete </span>}
          </span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span>
            {loginUserComment && <span onClick={editCommentHandler}>Edit</span>}
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
}
