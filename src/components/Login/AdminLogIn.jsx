import React from "react";
import { StyledLogIn } from "./AdminLogIn.styled";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { apiUrl, apiAuth } from "../../utilities/api";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { logIn } from "../../utilities/schemas";
import { useMutation } from "react-query";

const AdminLogIn = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const addLogIn = (logIn) => {
    return axios.post(apiUrl + apiAuth, logIn);
  };

  const useAddLogInData = () => {
    return useMutation(addLogIn, {
      onSuccess: (data) => {
        setAuth(data.data.jwt);
        return <Navigate to="/admin/" />;
      },
    });
  };
  const { mutate, isSuccess, isError } = useAddLogInData();

  const onSubmit = (formData) => {
    mutate({
      identifier: formData.identifier,
      password: formData.password,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logIn),
  });

  return (
    <StyledLogIn>
      <div className="login_container">
        <div className="login_form">
          <h1>Log in</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-Mail"
              {...register("identifier")}
            />
            {errors.identifier && <span>{errors.identifier.message}</span>}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <button type="submit">Log in</button>
          </form>
        </div>
        <div className="login_info">
          <h2>Log in to perform tasks such as:</h2>
          <ul>
            <li>
              <VscDebugBreakpointLog />
              Read and respond to bookings.
            </li>
            <li>
              <VscDebugBreakpointLog />
              Receive feedback from customers.
            </li>
            <li>
              <VscDebugBreakpointLog />
              Create and edit establishments in the database.
            </li>
          </ul>
        </div>
        <div
          className={
            isSuccess ? "message success" : isError ? "message error" : null
          }
        >
          {isSuccess ? "Logging in" : isError ? "An error occured" : null}
        </div>
      </div>
    </StyledLogIn>
  );
};

export default AdminLogIn;
