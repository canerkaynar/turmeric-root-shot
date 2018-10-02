import React from 'react';
import { Helmet } from 'react-helmet';
import {autobind} from 'core-decorators';
import Welcome from '../components/Welcome';

@autobind
class Home extends React.Component {

  head() {
    return (
      <Helmet>
        <title>{`HomePage Loaded`}</title>
        <meta property="og:title" content="Users App" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"/>        
      </Helmet>
    );
  }
  
  render() {
    return (
      <div>
        <Welcome/>
        {this.head()}
        <h1>HomePage</h1>
      </div>
    );
  }
};

export default {
  component: Home
};
