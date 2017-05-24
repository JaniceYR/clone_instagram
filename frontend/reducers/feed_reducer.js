import merge  from 'lodash/merge';

import { RECEIVE_FEED } from '../actions/feed_actions';

const FeedReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FEED:
      return merge({}, action.feed);
    default:
      return state;
  }
};

export default FeedReducer;
