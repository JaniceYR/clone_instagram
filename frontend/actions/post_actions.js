import * as APIUtil from '../util/post_api_util';

export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receiveUserPosts = (posts) => ({
  type: RECEIVE_USER_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const removePost = (post) => ({
  type: REMOVE_POST,
  post
});

export const fetchUserPosts = () => dispatch => (
  APIUtil.fetchUserPosts()
    .then(posts => dispatch(receiveUserPosts(posts)))
);

export const fetchPost = (id) => dispatch => (
  APIUtil.fetchPost(id)
    .then(post => dispatch(receivePost(post)))
);

export const createPost = (post) => dispatch => (
  APIUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = (id) => dispatch => (
  APIUtil
    .deletePost(id)
    .then((post) => dispatch(removePost(post)))
);
