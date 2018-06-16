import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      authed
        ? <Component {...props} />
        : <Redirect  to={{
          pathname: "/login",
          state: { from: props.location }}}
        />
      )} 
    />
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authed : authedUser
  };
}

export default connect(mapStateToProps)(PrivateRoute);