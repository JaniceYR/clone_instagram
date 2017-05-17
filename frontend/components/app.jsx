import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import FeedContainer from './feed/feed_container';
import UserProfileContainer from './user_profile/user_profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
      <Switch>
        <AuthRoute exact={true} path="/" component={SessionFormContainer} />
        <AuthRoute exact={true} path="/login" component={SessionFormContainer} />
        <AuthRoute exact={true} path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path="/feed" component={FeedContainer} />
        <ProtectedRoute path="/:username" component={UserProfileContainer} />
      </Switch>
    </div>
);

export default App;
