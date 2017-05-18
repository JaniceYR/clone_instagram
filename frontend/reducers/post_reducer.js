import { RECEIVE_POST,  REMOVE_POST } from '../actions/post_actions';
import merge  from 'lodash/merge';

const defaultPost = Object.freeze({
  id: null,
  user_id: null,
  photo_url: "",
  description: "",
  location: ""
});

const PostsReducer = (oldState = defaultPost, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_POST:
      return Object.merge({}, oldState, { selectedPost: [action.post]});
    case REMOVE_POST:
      let newState = merge({}, oldState);
      delete newState[action.post.id];
      return newState;
    default:
      return oldState;
  }
};

export default PostsReducer;
