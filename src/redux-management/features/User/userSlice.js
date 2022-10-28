import { createSlice } from "@reduxjs/toolkit";
import {
  signupHandler,
  loginHandler,
  bookmarkPost,
  removeBookmarkPost,
  getAllUser,
  followingUser,
  unfollowingUser,
} from "./userServices";

const initialState = {
  allUser: [],
  loading: false,
  foundUser: {},
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFoundUser: (state, action) => {
      state.foundUser = action.payload;
    },
    logout: (state) => {
      state.foundUser = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [signupHandler.pending]: (state) => {
      state.loading = true;
    },
    [signupHandler.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.encodedToken);
      state.foundUser = action.payload.createdUser;
    },
    [signupHandler.rejected]: (state) => {
      state.loading = false;
    },
    [loginHandler.pending]: (state) => {
      state.loading = true;
    },
    [loginHandler.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.encodedToken);
      state.foundUser = action.payload.foundUser;
      state.token = action.payload.encodedToken;
    },
    [loginHandler.rejected]: (state) => {
      state.loading = false;
    },
    [bookmarkPost.pending]: (state) => {
      state.loading = true;
    },
    [bookmarkPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.foundUser.bookmarks = action.payload;
    },
    [bookmarkPost.rejected]: (state) => {
      state.loading = false;
    },
    [removeBookmarkPost.pending]: (state) => {
      state.loading = true;
    },
    [removeBookmarkPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.foundUser.bookmarks = action.payload;
    },
    [removeBookmarkPost.rejected]: (state) => {
      state.loading = false;
    },
    [getAllUser.pending]: (state) => {
      state.loading = true;
    },
    [getAllUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.allUser = action.payload;
    },
    [getAllUser.rejected]: (state) => {
      state.loading = false;
    },
    [followingUser.pending]: (state) => {
      state.loading = true;
    },
    [followingUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.foundUser = action.payload.user;
      const newFoundUser = state.allUser.filter(
        (el) => el._id !== action.payload.followUser._id
      );
      state.allUser = [...newFoundUser, action.payload.followUser];
    },
    [followingUser.rejected]: (state) => {
      state.loading = false;
    },
    [unfollowingUser.pending]: (state) => {
      state.loading = true;
    },
    [unfollowingUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.foundUser = action.payload.user;
      const newFoundUser = state.allUser.filter(
        (el) => el._id !== action.payload.followUser._id
      );
      state.allUser = [...newFoundUser, action.payload.followUser];
    },

    [unfollowingUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
