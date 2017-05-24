import * as APIUtil from '../util/post_api_util';

// export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

// export const receivePosts = (posts) => ({
//   type: RECEIVE_POSTS,
//   posts
// });

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const removePost = (post) => ({
  type: REMOVE_POST,
  post
});
//
// export const fetchPosts = () => dispatch => (
//   APIUtil.fetchPosts()
//     .then(posts => dispatch(receivePosts(posts)))
// );

export const fetchPost = (postId) => dispatch => (
  APIUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
);

export const createPost = (post) => dispatch => (
  APIUtil.createPost(post)
    .then(newPost => dispatch(receivePost(newPost)))
);

export const deletePost = (postId) => dispatch => (
  APIUtil.deletePost(postId)
    .then((post) => dispatch(removePost(post)))
);
