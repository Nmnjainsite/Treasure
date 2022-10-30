import { Navigate, useLocation } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
export default function RequireAuth({ children }) {
  const { token } = useSelector((state) => state.user);
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
