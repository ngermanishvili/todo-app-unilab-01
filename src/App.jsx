import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./route/Home";
import Login from "./route/Login";
import Todo from "./route/Todo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
