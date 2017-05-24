import merge  from 'lodash/merge';

import { RECEIVE_POST,
        REMOVE_POST
        // RECEIVE_POSTS
      } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    // case RECEIVE_POSTS:
    //   return merge({}, action.posts);
    case RECEIVE_POST:
      return merge({}, action.post);
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
    case RECEIVE_LIKE:
      return merge({}, state, { liked: true,
                                likes_count: state.likes_count + 1 });
    case REMOVE_LIKE:
      return merge({}, state, { liked: false,
                                likes_count: state.likes_count - 1 });
    case RECEIVE_COMMENT:
      let addNewComment = merge({}, state);
      addNewComment.comments.push(action.comment);
      addNewComment.comments_count = state.comments_count + 1;
      return addNewComment;
    case REMOVE_COMMENT:
      let removeComment =  merge({}, state);
      removeComment.comments = removeComment.comments.filter( (comment, index) => comment.id !== action.comment.id);
      return removeComment;
    default:
      return state;
  }
};

export default PostsReducer;
