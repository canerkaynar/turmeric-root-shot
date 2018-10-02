import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

const Root = ({ route }) => {
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  );
};

Root.propTypes = {
  route: PropTypes.instanceOf(Object)
}

export default {
  component: Root
};
