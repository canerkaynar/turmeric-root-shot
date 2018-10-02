import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Route not found.</h1>;
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.instanceOf(Object)
}

export default {
  component: NotFoundPage
};
