import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers()
  .then( users => dispatch(receiveUsers(users)))
);

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId)
    .then( newUser => dispatch(receiveUser(newUser)))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
    .then( newUser => dispatch(receiveUser(newUser)))
);
