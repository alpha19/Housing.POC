import styled from 'styled-components';

import { color } from 'shared/utils/styles';

// TODO: Consider if these should be shared components/styles
export const StyledCityForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  border-radius: calc(0.5 * 100px);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.38);
  justify-content: space-evenly;
`;

export const StyledCityInput = styled.input`
  font-size: 1rem;
  font-weight: 400;
  width: 93%;
  height: 45px;
  padding-right: 5px;
  padding-left: 10px;
  outline: 10px;
  border: none;
  border-radius: calc(0.5 * 100px);
  placeholder {
    color: #000;
  }
`;

export const StyledCityButton = styled.button`
  background:  transparent;
  height: 45px;
  outline: 10px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    opacity: 0.6;
  };
  color: ${color.primary};
`;

