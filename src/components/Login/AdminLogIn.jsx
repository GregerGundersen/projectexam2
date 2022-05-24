import React from "react";
import { StyledLogIn } from "./AdminLogIn.styled";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { apiUrl, apiAuth } from "../../utilities/api";
import axios from "axios";

const AdminLogIn = () => {
  const [auth, setAuth] = useContext(AuthContext);

  if (auth) {
    return <Navigate to="/admin/" />;
  }

  // Gets data from input fields and handles login request.
  const handleLogIn = async (event) => {
    event.preventDefault();

    const id = event.target.elements.email.value;
    const pw = event.target.elements.password.value;

    const responseData = await axios.post(apiUrl + apiAuth, {
      identifier: id,
      password: pw,
    });
    console.log(responseData);
    if (responseData.status === 200) {
      setAuth(responseData.data.jwt);
      return <Navigate to="/admin/" />;
    }
  };

  return (
    <StyledLogIn>
      <div className="login_container">
        <div className="login_form">
          <h1>Log in</h1>
          <form onSubmit={handleLogIn}>
            <input type="email" id="email" name="email" placeholder="E-Mail" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <button>Log in</button>
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
      </div>
    </StyledLogIn>
  );
};

export default AdminLogIn;
