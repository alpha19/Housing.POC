import React from 'react';
import PropTypes from 'prop-types';

import { StyledIcon } from './Styles';

const fontIconCodes = {
  [`home`]: '\\e902',
  [`plus`]: '\\ea0a',
  [`help`]: '\\ea09',
  [`trash`]: '\\e9ad',
};

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(fontIconCodes)).isRequired,
  size: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  size: 16,
  left: 0,
  top: 0,
};

const Icon = ({ type, ...iconProps }) => {
  return (
  <StyledIcon {...iconProps} code={fontIconCodes[type]} />
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;