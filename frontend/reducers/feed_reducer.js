import merge  from 'lodash/merge';

import { RECEIVE_FEED } from '../actions/feed_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const FeedReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FEED:
      return merge({}, action.feed);
    case RECEIVE_LIKE:
      let addNewLike = merge({}, state);
      addNewLike[action.like.post_id].liked = true;
      addNewLike[action.like.post_id].likes_count
                    = addNewLike[action.like.post_id].likes_count + 1;
      return addNewLike;
    case REMOVE_LIKE:
      let removeLike = merge({}, state);
      removeLike[action.like.post_id].liked = false;
      removeLike[action.like.post_id].likes_count
                    = removeLike[action.like.post_id].likes_count - 1;
      return removeLike;
    // case RECEIVE_COMMENT:
    //   let addNewComment = merge({}, state);
    //   addNewComment.comments.push(action.comment);
    //   addNewComment.comments_count = state.comments_count + 1;
    //   return addNewComment;
    // case REMOVE_COMMENT:
    //   let removeComment =  merge({}, state);
    //   removeComment.comments = removeComment.comments.filter( (comment, index) => comment.id !== action.comment.id);
    //   return removeComment;

    default:
      return state;
  }
};

export default FeedReducer;
