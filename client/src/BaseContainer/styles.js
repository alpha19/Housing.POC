import styled from 'styled-components';

import { sizes, color } from 'shared/utils/styles';

const paddingLeft = sizes.appNavBarLeftWidth + 40;

export const BaseDiv = styled.div`
`;

export const Header = styled.h1`
  margin-top: 6px;
  display: flex;
  justify-content: center;
  font-size: 6rem;
  font-weight: 300;
  margin-bottom: 2rem;
  text-align: center;
  align-items: center;
  color: ${color.teal};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 32px 1500px ${paddingLeft}px;
  @media (max-width: 1100px) {
    padding: 25px 20px 50px ${paddingLeft - 20}px;
  }
  @media (max-width: 999px) {
    padding-left: ${paddingLeft - 20}px;
  }
`;