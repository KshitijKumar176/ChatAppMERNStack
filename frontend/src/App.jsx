import { Toaster } from "react-hot-toast";
import "./App.css";
import { useAuthContext } from "./context/AuthContext.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/Signup.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster
        position="top right"
        toastOptions={
          ({ duration: 2000 },
          {
            error: {
              duration: 10000,
              style: {
                background: "#BF3131",
                color: "#EEEDED",
                border: "1px solid #7D0A0A",
                boxShadow: "0px 0px  5px red",
              },
            },
          })
        }
      />
    </div>
  );
}

export default App;
