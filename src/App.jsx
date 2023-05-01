import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./route/Home";
import ProtectLoginRoute from "./components/Protected/ProtectLoginRoute";
import ProtectTodoRoute from "./components/Protected/ProtectTodoRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<ProtectLoginRoute />} />
        <Route path="/todolist" element={<ProtectTodoRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
