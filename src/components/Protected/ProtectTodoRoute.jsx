import React from "react";
import TodoList from "../TodoList";
import { useState } from "react";
import { Navigate } from "react-router-dom";


const ProtectTodoRoute = () => {
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );

  if (isAuthenticated) {
    return <TodoList />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectTodoRoute;
