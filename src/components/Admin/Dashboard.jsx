import React from "react";
import { StyledDashboard } from "./Dashboard.styled";
import Bookings from "./Bookings";
import Feedback from "./Feedback";
import NewEstablishment from "./NewEstablishment";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Bookings />
      <Feedback />
      <NewEstablishment />
    </StyledDashboard>
  );
};

export default Dashboard;
