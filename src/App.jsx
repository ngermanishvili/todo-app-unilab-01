import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./route/Home";
import Login from "./route/Login";
import TodoList from "./components/TodoList";

const App = () => {
  // i'm using this state with using localStorage to check if the user is authenticated or not. If yes, the user is redirected to the TodoList page. If not, the user is redirected to the Login page.
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );

  const handleLogin = () => {
    localStorage.setItem("authenticated", true);
    setAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    setAuthenticated(false);
  };

  // in here i'm checking if the user is authenticated. If yes, the user is redirected to the TodoList page. If not, the user is redirected to the Login page.
  const renderLoginRoute = () => {
    if (isAuthenticated) {
      return <Navigate to="/todolist" />;
    } else {
      return <Login onLogin={handleLogin} />;
    }
  };
  // in here i'm check also if the user is authenticated. If yes, the user is redirected to the TodoList page. If not, the user is redirected to the Home page.
  const renderTodoListRoute = () => {
    if (isAuthenticated) {
      return <TodoList onLogout={handleLogout} />;
    } else {
      return <Navigate to="/" />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={renderLoginRoute()} />
        <Route path="/todolist" element={renderTodoListRoute()} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
