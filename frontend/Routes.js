/*eslint-disable*/
import React from 'react';
import Root from './Root';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...Root,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
