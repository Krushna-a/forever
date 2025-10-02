import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Edit from "./pages/Edit";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAuthenticated(!!token);
  }, []);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? <Login /> : <Navigate to="/list" replace />
          }
        />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <div className="w-full flex">
                  <div className="w-1/6">
                    <Sidebar />
                  </div>
                  <div className="w-5/6 flex justify-center">
                    <Routes>
                      <Route path="/add" element={<Add />} />
                      <Route path="/list" element={<List />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/edit/:id" element={<Edit />} />
                    </Routes>
                  </div>
                </div>
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
