import React from 'react';
import PropTypes from 'prop-types';

import formatCurrency from '../../utils/formatCurrency';

const Price = ({ value, isAbsolute, ...rest }) => {
  const price = formatCurrency(value, isAbsolute);
  return <span {...rest}>{price}</span>;
};

Price.propTypes = {
  value: PropTypes.number.isRequired,
  isAbsolute: PropTypes.bool,
};

Price.defaultProps = {
  isAbsolute: false,
};

export default Price;
