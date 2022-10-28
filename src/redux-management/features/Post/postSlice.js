import { createSlice } from "@reduxjs/toolkit";
import {
  getAllPost,
  likePost,
  dislikePost,
  getUserPost,
  addComments,
  getAllComments,
  editComment,
  deleteComment,
  upVoteComment,
  downVoteComment,
  createPost,
  editPost,
  deletePost,
} from "./postServices";
const initialState = {
  allPost: [],
  userPost: [],
  status: false,
  loading: false,
  trendingPost: [],
  getCommentForPost: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.status = true;
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.allPost = action.payload;
      state.trendingPost = action.payload;
      state.status = false;
    },
    [getAllPost.rejected]: (state) => {
      state.status = false;
    },
    [getUserPost.pending]: (state) => {
      state.status = true;
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.userPost = action.payload;
      state.status = false;
    },
    [getUserPost.rejected]: (state) => {
      state.status = false;
    },

    [likePost.pending]: (state) => {
      state.status = true;
    },
    [likePost.fulfilled]: (state, action) => {
      state.allPost = action.payload;
      state.status = false;
    },
    [likePost.rejected]: (state) => {
      state.status = false;
    },
    [dislikePost.pending]: (state) => {
      state.status = true;
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [dislikePost.rejected]: (state) => {
      state.status = false;
    },
    [getAllComments.pending]: (state) => {
      state.status = true;
    },
    [getAllComments.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [getAllComments.rejected]: (state) => {
      state.status = false;
    },
    [addComments.pending]: (state) => {
      state.status = true;
    },
    [addComments.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [addComments.rejected]: (state) => {
      state.status = false;
    },
    [editComment.pending]: (state) => {
      state.status = true;
    },
    [editComment.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [editComment.rejected]: (state) => {
      state.status = false;
    },
    [deleteComment.pending]: (state) => {
      state.status = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [deleteComment.rejected]: (state) => {
      state.status = false;
    },
    [upVoteComment.pending]: (state) => {
      state.status = true;
    },
    [upVoteComment.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [upVoteComment.rejected]: (state) => {
      state.status = false;
    },
    [downVoteComment.pending]: (state) => {
      state.status = true;
    },
    [downVoteComment.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [downVoteComment.rejected]: (state) => {
      state.status = false;
    },
    [createPost.pending]: (state) => {
      state.status = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [createPost.rejected]: (state) => {
      state.status = false;
    },
    [editPost.pending]: (state) => {
      state.status = true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [editPost.rejected]: (state) => {
      state.status = false;
    },
    [deletePost.pending]: (state) => {
      state.status = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.status = false;
      state.allPost = action.payload;
    },
    [deletePost.rejected]: (state) => {
      state.status = false;
    },
  },
});

export const postReducer = postSlice.reducer;
