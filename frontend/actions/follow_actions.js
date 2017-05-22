import * as APIUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const createFollow = (followerId, followingId) => dispatch => {
  return (
    APIUtil.createFollow(followerId, followingId)
    .then( follow => dispatch(receiveFollow(follow)))
  );
};

export const deleteFollow = (followerId, followingId) => dispatch => {
  return (
    APIUtil.deleteFollow(followerId, followingId)
    .then( follow => dispatch(removeFollow(follow)))
  );
};
