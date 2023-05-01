import React from "react";
import Login from "../../route/Login";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectLoginRoute = () => {
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );

  // 
  if (isAuthenticated) {
    return <Navigate to="/todolist" />;
  } else {
    return <Login />;
  }
};

export default ProtectLoginRoute;
