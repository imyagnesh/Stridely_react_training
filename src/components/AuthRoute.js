import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log(props);
      if (isAuthenticated) {
        return <Component {...props} />;
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
  component: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default AuthRoute;
