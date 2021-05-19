import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthRoute = ({ component: Component, route, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthenticated) {
        return <Component {...props} route={route} />;
      }
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  route: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      path: PropTypes.string,
      exact: PropTypes.bool,
      component: PropTypes.func,
      authRequire: PropTypes.bool,
    }),
  ),
};

AuthRoute.defaultProps = {
  route: [],
};

export default AuthRoute;
