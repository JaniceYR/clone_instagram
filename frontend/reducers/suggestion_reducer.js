import merge  from 'lodash/merge';

import { RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const SuggestionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_FOLLOW:
      let addFollow = merge({}, state);
      addFollow[action.follow.following_id].followed = true;
      return addFollow;
    case REMOVE_FOLLOW:
      let removeFollow = merge({}, state);
      removeFollow[action.follow.following_id].followed = false;
      return removeFollow;
    default:
      return state;
  }
};

export default SuggestionReducer;
