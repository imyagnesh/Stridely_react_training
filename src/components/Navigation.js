/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ path, component: Component, routes, ...rest }) => (
  <Route path={path} render={props => <Component {...props} routes={routes} {...rest} />} />
);

Navigation.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  routes: PropTypes.array,
};
Navigation.defaultProps = {
  routes: [],
};

export default Navigation;
