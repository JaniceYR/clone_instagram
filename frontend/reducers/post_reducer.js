import merge  from 'lodash/merge';

import { RECEIVE_POST, REMOVE_POST, RECEIVE_POSTS } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      return merge({}, action.post);
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
    case RECEIVE_LIKE:
      return merge({}, state, { liked: true });
    case REMOVE_LIKE:
      return merge({}, state, { liked: false });
    default:
      return state;
  }
};

export default PostsReducer;
