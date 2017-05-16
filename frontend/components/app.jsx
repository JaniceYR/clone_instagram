import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';


const App = () => (
  <div>
      <Link to="/">
        <h1>App main page</h1>
      </Link>

      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
