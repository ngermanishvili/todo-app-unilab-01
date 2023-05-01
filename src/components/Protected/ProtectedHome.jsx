import React from "react";
import Home from "../../route/Home";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedHome = () => {
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );

  if (isAuthenticated) {
    return <Navigate to="/todolist" />;
  } else {
    return <Home />;
  }
};

export default ProtectedHome;
