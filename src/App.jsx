import Navbar from "/src/components/Header/Navbar.jsx";

const App = () => {
  // This is the state that will be used to check if the user is authenticated or not.
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );

  const handleLogin = () => {
    setAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
