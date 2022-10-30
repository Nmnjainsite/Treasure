import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  followingUser,
  unfollowingUser,
} from "../../redux-management/features/User/userServices";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./users.css";
import { toast } from "react-toastify";
const Following = ({ user }) => {
  const { foundUser, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const followUserHandler = () => {
    dispatch(followingUser({ token, followUserId: user._id }));
    toast.success(`You started following ${user.firstName}`);
  };

  const findUser = foundUser.following.some((el) => el._id === user._id);

  const unfollowUserHandler = () => {
    dispatch(unfollowingUser({ token, followUserId: user._id }));
    toast.success(`You unfollowed ${user.firstName}`);
  };

  return (
    <div>
      {" "}
      <div key={user._id}>
        <ul className="users-list">
          <img
            onClick={() => navigate(`/user/${user._id}`)}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU"
            className="user-img"
            loading="lazy"
            alt=""
          ></img>

          <li className="user-name">
            {user.firstName} {user.lastName}
          </li>
        </ul>
        {findUser ? (
          <Button
            onClick={unfollowUserHandler}
            sx={{ ml: 5, width: "60%" }}
            variant="contained"
          >
            Unfollow
          </Button>
        ) : (
          <Button
            sx={{ ml: 5, width: "60%" }}
            variant="outlined"
            onClick={followUserHandler}
          >
            Follow
          </Button>
        )}
      </div>
    </div>
  );
};

export default Following;
