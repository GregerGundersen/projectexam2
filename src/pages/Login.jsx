import React from "react";
import Footer from "../components/Footer/Footer";
import AdminLogIn from "../components/Login/AdminLogIn";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [auth, setAuth] = useContext(AuthContext);

  if (auth) {
    return <Navigate to="/admin/" />;
  }
  return (
    <>
      <AdminLogIn />
      <Footer />
    </>
  );
};

export default Login;
