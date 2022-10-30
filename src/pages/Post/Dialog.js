import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  editPost,
  getAllPost,
} from "../../redux-management/features/Post/postServices";
import { toast } from "react-toastify";
export default function Dialogs({ post }) {
  const [open, setOpen] = React.useState(false);

  const [editItem, setEditItem] = React.useState(post.content);
  const [editImg, setEditImg] = React.useState(post.pic);
  const newPost = { ...post, content: editItem, pic: editImg };
  const { token } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const editPostHandler = () => {
    dispatch(editPost({ postId: post._id, token, postData: newPost }));
    dispatch(getAllPost());
    toast.success("Post Edited !");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Typography onClick={handleClickOpen}>Edit</Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <TextField
            accept="image/*"
            type="file"
            fullWidth
            onChange={(e) => setEditImg(URL.createObjectURL(e.target.files[0]))}
          />

          <TextField
            type="text"
            fullWidth
            sx={{ mt: 3 }}
            variant="standard"
            onChange={(e) => setEditItem(e.target.value)}
            value={editItem}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>
            <Typography onClick={editPostHandler}>Save</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
