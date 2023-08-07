import { useState } from "react";
import "./styles/tailwind.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./auth/Login";
import NotFound from "./pages/errors/NotFound";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import Main from "./pages/main/MainIndex";
import ProductsRouter from "./pages/products/ProductsRouter";
import MainRouter from "./pages/main/MainRouter";
import MainIndex from "./pages/main/MainIndex";
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main/*" element={<MainIndex />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
