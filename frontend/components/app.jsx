import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './session/session_form_container';
import FeedContainer from './feed/feed_container';
import UserProfileContainer from './user_profile/user_profile_container';
import UserEditContainer from './user_profile/user_edit_container';
import PostUploadContainer from './post/post_upload_container';

const App = () => (
    <div>
      <Switch>
        <AuthRoute exact path="/" component={SessionFormContainer} />
        <AuthRoute exact path="/login" component={SessionFormContainer} />
        <AuthRoute exact path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path="/feed" component={FeedContainer} />
        <ProtectedRoute path="/:userId/edit" component={UserEditContainer} />
        <ProtectedRoute exact path="/:userId/post_upload" component={PostUploadContainer} />
        <ProtectedRoute path="/:userId" component={UserProfileContainer} />
    </Switch>
    </div>
);

export default App;
