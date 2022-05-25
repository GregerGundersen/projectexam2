import React from "react";
import Dashboard from "../components/Admin/Dashboard";
import Footer from "../components/Footer/Footer";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const [auth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/login/" />;
  }

  return (
    <>
      <Dashboard />
      <Footer />
    </>
  );
};

export default Admin;
