import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

import { Button } from 'shared/components';

export const StyledCity = styled.div`
	margin-left: 20%;
	margin-right: 20%;
	align-items: center;
  lex-direction: column;
`;

export const ActionButton = styled(Button)`
  margin-bottom: 30px;
`;