export const createLike = (currentUserId, postId) => {
  return $.ajax({
    method: "POST",
    url: "api/likes",
    data: {like : {user_id: currentUserId, post_id: postId}}
  });
};

export const deleteLike = (currentUserId, postId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/likes/${currentUserId}`,
    data: {like : {user_id: currentUserId, post_id: postId}}
  });
};
