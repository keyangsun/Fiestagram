import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapSTP = state => ({
    loggedin: Boolean(state.session.currentUserId)
});

const Auth = ({ loggedin, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedin ? <Redirect to="/home" /> : <Component {...props} />
        )}
    />
);

const Protected = ({ loggedin, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedin ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
);

export const AuthRoute = withRouter(connect(mapSTP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapSTP, null)(Protected));