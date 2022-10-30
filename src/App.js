import Login from "./pages/Auth/login";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Auth/signup";
import PostView from "./pages/Post/Post";
import UserDetails from "./components/Profile/UserDetails";
import MockAPI from "./components/Mockman";
import Error404 from "./pages/Error404";
import RequireAuth from "./pages/RequiereAuth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <PostView />
            </RequireAuth>
          }
        />
        <Route
          path="/user/:userId"
          element={
            <RequireAuth>
              <UserDetails />
            </RequireAuth>
          }
        />
        <Route path="/mockman" element={<MockAPI />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
export default App;
