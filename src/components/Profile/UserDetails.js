import React from "react";
import { useParams } from "react-router-dom";
import UserDetailsCard from "./UserDetailsCard";
const UserDetails = () => {
  const { userId } = useParams();
  return (
    <div>
      <UserDetailsCard userId={userId} />
      <div className="users-box-card"></div>
    </div>
  );
};

export default UserDetails;
