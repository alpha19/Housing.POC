import styled from 'styled-components';

import { Link } from "react-router-dom"

import { color } from 'shared/utils/styles';

// Shared with StyledListing!!!
// TODO: Move to shared location and share with Listing component
export const StyledCityItem = styled.li`
  font-size: 1.3rem;
  font-weight: 500;
  list-style-type: none;
  padding: 17px 0px;
  border-bottom: 1px solid #eaeaea;
`;

export const StyledLink = styled(Link)`
  &:hover {
    opacity: 0.6;
  };
`;

export const StyledButton = styled.button`
  background:  transparent;
  outline: 10px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    opacity: 0.6;
  };
  color: ${color.danger};
`;