import * as APIUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const createLike = (currentUserId, postId) => dispatch => {
  return (
    APIUtil.createLike(currentUserId, postId)
    .then( like => dispatch(receiveLike(like)))
  );
};

export const deleteLike = (currentUserId, postId) => dispatch => {
  return (
    APIUtil.deleteLike(currentUserId, postId)
    .then( like => dispatch(removeLike(like)))
  );
};
