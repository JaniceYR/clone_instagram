import { RECEIVE_POST, REMOVE_POST, RECEIVE_POSTS } from '../actions/post_actions';
import merge  from 'lodash/merge';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
