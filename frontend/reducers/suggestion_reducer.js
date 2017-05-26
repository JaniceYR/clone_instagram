import merge  from 'lodash/merge';

import { RECEIVE_USERS } from '../actions/user_actions';

const SuggestionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};

export default SuggestionReducer;
