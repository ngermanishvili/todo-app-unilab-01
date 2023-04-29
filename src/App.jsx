import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./route/Home";
import Login from "./route/Login";
import TodoList from "./components/TodoList";

// This Private route component is used to protect the /todolist route. If the user is not authenticated, they will be redirected to the /login route. Otherwise, they will be able to access the /todolist route. element: Element, isAuthenticated, ...rest are props passed to the component, and coming from the route definition. element is the component to render, isAuthenticated is a boolean indicating if the user is authenticated, and ...rest is the rest of the props passed to the component.

const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Element />
        ) : (
          <Navigate to="/login" state={{ from: rest.location }} />
        )
      }
    />
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // Here I check if the user is authenticated when the component is mounted. If yes, I set the isAuthenticated state to true. Otherwise, I set it to false.
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true"); // store the authentication status in local storage
  };

  // Here I set the isAuthenticated state to false and remove the authentication status from local storage. This will log the user out.
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false"); // store the authentication status in local storage
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <PrivateRoute
          path="/todolist"
          element={<TodoList onLogout={handleLogout} />}
          isAuthenticated={isAuthenticated}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;