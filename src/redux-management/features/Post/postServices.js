import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getAllPost = createAsyncThunk(
  "/post/getAllPost",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/posts");
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getUserPost = createAsyncThunk(
  "post/getUserPost",
  async ({ username }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/posts/user/${username}`);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(`Error from getUserPost: ${error.message}`);
    }
  }
);

export const likePost = createAsyncThunk(
  "post/likePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `api/posts/like/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(`Error from likePost: ${error.message}`);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "post/dislikePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `api/posts/dislike/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(`Error from dislikePost: ${error.message}`);
    }
  }
);

export const getAllComments = createAsyncThunk(
  "/posts/comments",
  async ({ postId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/comments/${postId}`);
      console.log(response);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(`Error from fetching comments:${error}`);
    }
  }
);
export const addComments = createAsyncThunk(
  "/posts/addComments",
  async ({ postId, token, postData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData: postData },
        { headers: { authorization: token } }
      );
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(`Error From Posting Comments: ${error.message}`);
    }
  }
);

export const editComment = createAsyncThunk(
  "/posts/editComment",
  async ({ postId, commentId, token, editData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        {
          commentData: editData,
        },
        { headers: { authorization: token } }
      );
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(`Error from edit comment:${error.message}`);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "/posts/deleteComment",
  async ({ postId, commentId, token, deleteData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/delete/${postId}/${commentId}`,
        {
          commentData: deleteData,
        },
        { headers: { authorization: token } }
      );
      console.log(response);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(`Error from delete comment:${error.message}`);
    }
  }
);

export const upVoteComment = createAsyncThunk(
  "/posts/upVoteComment",
  async ({ postId, commentId, token, upVoteData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/upvote/${postId}/${commentId}`,
        {
          commentData: upVoteData,
        },
        { headers: { authorization: token } }
      );
      console.log(response);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(`Error from upvoting comment:${error.message}`);
    }
  }
);

export const downVoteComment = createAsyncThunk(
  "/posts/downVoteComment",
  async ({ postId, commentId, token, downVoteData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/downvote/${postId}/${commentId}`,
        {
          commentData: downVoteData,
        },
        { headers: { authorization: token } }
      );
      console.log(response);
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(`Error from downvoting comment:${error.message}`);
    }
  }
);
