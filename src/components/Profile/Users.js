import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../../redux-management/features/User/userServices";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./users.css";
import Profile from "../../assets/Profile.jpeg";
const Users = () => {
  const { allUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <div>
      <div className="users-container">
        <p style={{ marginLeft: "2rem" }}>Suggest for you</p>
        {allUser.map((user) => (
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
            <Button sx={{ ml: 5, width: "60%" }} variant="outlined">
              Follow
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
