import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Grid = ({ data, renderItem, keyExtractor, ...rest }) => {
  if (!data || !data.length) return null;

  return (
    <Container {...rest}>
      {data.map((item) =>
        React.cloneElement(renderItem(item), {
          key: keyExtractor(item),
        })
      )}
    </Container>
  );
};

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func.isRequired,
};

export default Grid;
