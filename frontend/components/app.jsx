import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';


const App = ({currentUser}) => {

  return (
    <div>
        <h1>App main page</h1>
        <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />

    </div>
  );
};

export default App;
// 
//
// const _ensureLoggedIn = (nextState, replace) => {
//   const currentUser = store.getState().session.currentUser;
//   if (!currentUser) {
//     replace('/signup');
//   }
// };
