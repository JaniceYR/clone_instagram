import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId)
    .then( newUser => dispatch(receiveUser(newUser)))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
    .then( newUser => dispatch(receiveUser(newUser)))
);
