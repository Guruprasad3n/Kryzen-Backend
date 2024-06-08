import { useState } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {isAuthenticated ? (
          <Route path="/product-list" element={<Products />} />
        ) : (
          <Route path="/product-list" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </>
  );
}

export default App;
