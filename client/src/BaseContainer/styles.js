import styled from 'styled-components';

import { sizes } from 'shared/utils/styles';

const paddingLeft = sizes.appNavBarLeftWidth + 40;

export const BasePage = styled.div`
  padding: 25px 32px 50px ${paddingLeft}px;
  @media (max-width: 1100px) {
    padding: 25px 20px 50px ${paddingLeft - 20}px;
  }
  @media (max-width: 999px) {
    padding-left: ${paddingLeft - 20}px;
  }
`;

export const Header = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  margin-bottom: 2rem;
  line-height: 1em;
  color: #ececec;
  text-transform: lowercase;
  text-align: center;
`;

export const BaseDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;