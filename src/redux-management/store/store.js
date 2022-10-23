import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../features/Post/postSlice";
import userReducer from "../features/User/userSlice";

export const store = configureStore({
  reducer: { post: postReducer, user: userReducer },
});
