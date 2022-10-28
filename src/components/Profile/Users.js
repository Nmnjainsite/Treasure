import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser } from "../../redux-management/features/User/userServices";

import "./users.css";

import Following from "./following";
const Users = () => {
  const { allUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <div>
      <div className="users-container">
        <p style={{ marginLeft: "2rem" }}>Suggest for you</p>
        {allUser.map((user) => (
          <Following user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
