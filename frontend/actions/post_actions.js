import * as APIUtil from '../util/post_api_util';

export const RECEIVE_STREAM_POSTS = "RECEIVE_STREAM_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receiveUserPhotos = (posts) => ({
  type: RECEIVE_USER_POSTS,
  posts
});

export const receivePhoto = (post) => ({
  type: RECEIVE_POST,
  post
});

export const removePhoto = (post) => ({
  type: REMOVE_POST,
  post
});

export const fetchUserPhotos = () => dispatch => (
  APIUtil.fetchUserPhotos()
    .then(posts => dispatch(receiveUserPhotos(posts)))
);

export const fetchPhoto = (id) => dispatch => (
  APIUtil.fetchPhoto(id)
    .then(post => dispatch(receivePhoto(post)))
);

export const createPhoto = (post) => dispatch => (
  APIUtil.createPhoto(post)
    .then(post => dispatch(receivePhoto(post)))
);

export const updatePhoto = (post) => dispatch => (
  APIUtil.updatePhoto(post)
    .then(post => dispatch(receivePhoto(post)))
);

export const deletePhoto = (id) => dispatch => (
  APIUtil
    .deletePhoto(id)
    .then((post) => dispatch(removePhoto(post)))
);
