import * as APIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const createComment = (comment) => dispatch => {
  return (
    APIUtil.createComment(comment)
    .then( newComment => dispatch(receiveComment(newComment)))
  );
};

export const deleteComment = (commentId) => dispatch => {
  // debugger
  return (
    APIUtil.deleteComment(commentId)
    .then( deletedComment => dispatch(removeComment(deletedComment)))
  );
};
