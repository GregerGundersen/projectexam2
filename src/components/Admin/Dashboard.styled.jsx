import styled from "styled-components";
import { spacing } from "../../App.styled";

export const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.space1};
  margin: ${spacing.space3} ${spacing.space13};

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    margin: ${spacing.space3} ${spacing.space5};
  }
`;
