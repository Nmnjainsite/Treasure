import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../redux-management/features/Post/postServices";
import { toast } from "react-toastify";
import Dialogs from "./Dialog";

const ITEM_HEIGHT = 48;

export default function EditPost({ post }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { token } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const deletePostHandler = () => {
    dispatch(deletePost({ postId: post._id, token }));
    toast.success("Post Deleted");
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
        <MenuItem>
          <Dialogs post={post} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span>
            <span onClick={deletePostHandler}>Delete</span>
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
}
