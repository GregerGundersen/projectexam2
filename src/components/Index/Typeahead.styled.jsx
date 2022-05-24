import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, spacing } from "../../App.styled";

export const StyledTypeahead = styled.div`
  background: white;
  padding: ${spacing.space2};
  transition: 0.25s;

  &:focus-within {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transform: scale(1.025);
  }

  h2 {
    font-weight: 300;
    font-size: 2rem;
  }

  input {
    width: 100%;
    padding: ${spacing.space1};

    &:focus {
      outline: 1px solid ${colors.green400};
    }
  }
  .typeahead_suggestion__list {
    max-height: 200px;
    overflow: scroll;
    li {
      list-style: none;
      margin: ${spacing.space2} 0;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  border-bottom: 1px solid ${colors.green400};
  overflow: scroll;

  &:hover {
    color: ${colors.green600};
  }
`;
