export const RECEIVE_USER = "RECEIVE_USER";

import * as APIUtil from "../util/user_api_util";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUser = user => dispatch => (
  APIUtil.fetchUser(user)
    .then( newUser => dispatch(receiveUser(newUser)))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
    .then( newUser => dispatch(receiveUser(newUser)))
);
