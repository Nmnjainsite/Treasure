import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const signupHandler = createAsyncThunk(
  "signupHandler/auth",
  async ({ firstName, lastName, username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        username,
        password,
      });
      toast.success("Signup successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(`Error from signup:${error.message}`);
    }
  }
);

export const loginHandler = createAsyncThunk(
  "loginHandler/auth",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        username,
        password,
      });
      toast.success("Login Successfully");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        `Error Occurred in Login ${error.message}`,
        toast.error("Credentials have not matched")
      );
    }
  }
);
export const bookmarkPost = createAsyncThunk(
  "user/bookmarkPost",

  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      return response.data.bookmarks;
    } catch (error) {
      return rejectWithValue(`Error from bookmarkpost: ${error.message}`);
    }
  }
);

export const removeBookmarkPost = createAsyncThunk(
  "/auth/removeBookmark",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      return response.data.bookmarks;
    } catch (error) {
      return rejectWithValue(`Error from removebookmarkpost: ${error.message}`);
    }
  }
);

export const getAllUser = createAsyncThunk(
  "/user/getAllUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/users");
      return response.data.users;
    } catch (error) {
      return rejectWithValue(`Error from allUser: ${error.message}`);
    }
  }
);

export const followingUser = createAsyncThunk(
  "/user/followUser",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: token } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`Error from following user: ${error.message}`);
    }
  }
);

export const unfollowingUser = createAsyncThunk(
  "/user/unfollowUser",
  async ({ followUserId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        { headers: { authorization: token } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`Error from unfollow user: ${error.message}`);
    }
  }
);

export const editProfile = createAsyncThunk(
  "/user/editProfile",
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/edit`,
        { userData: userData },
        { headers: { authorization: token } }
      );
      return response.data.users;
    } catch (error) {
      return rejectWithValue(`Error from editing profile:${error.message}`);
    }
  }
);
