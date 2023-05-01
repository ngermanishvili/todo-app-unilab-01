import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectLoginRoute from "./components/Protected/ProtectLoginRoute";
import ProtectTodoRoute from "./components/Protected/ProtectTodoRoute";
import ProtectedHome from "./components/Protected/ProtectedHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedHome />} />
        <Route path="/login" element={<ProtectLoginRoute />} />
        <Route path="/todolist" element={<ProtectTodoRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
