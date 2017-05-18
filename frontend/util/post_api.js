export const fetchStreamPosts = () => (
  $.ajax({
    method: "GET",
    url: "/api/posts"
  })
);

export const fetchPost = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/posts/${id}`
  })
);

export const createPost = (post) => (
  $.ajax({
    method: "POST",
    url: "api/posts",
    data: { post }
  })
);

export const deletePost = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/posts/${id}`
  })
);
