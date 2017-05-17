import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const noOneLogged = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = noOneLogged, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, noOneLogged, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, noOneLogged, {
        errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
