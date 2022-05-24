import React from "react";
import { StyledDashboard } from "./Dashboard.styled";
import Bookings from "./Bookings";
import Feedback from "./Feedback";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Bookings />
      <Feedback />
      <div className="add_establishment"></div>
    </StyledDashboard>
  );
};

export default Dashboard;
