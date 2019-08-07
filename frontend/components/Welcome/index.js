import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Welcome = () => {

  return (
    <div>
      <p>NODE_ENV: {process.env.NODE_ENV}</p>
      <p>API_GATEWAY: {process.env.API_GATEWAY}</p>
      <p>PORT: {process.env.PORT}</p>
      <p>CUSTOM: {process.env.CUSTOM}</p>
    </div>
  );
};

export default Welcome;
