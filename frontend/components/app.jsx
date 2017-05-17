import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import FeedContainer from './feed/feed_container';
import UserProfileContainer from './user_profile/user_profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
      <ProtectedRoute path="/" exact component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/feed" component={FeedContainer} />
    </div>
);

export default App;
