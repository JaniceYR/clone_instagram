export const createFollow = (currentUserId, postId) => {
  return $.ajax({
    method: "POST",
    url: "api/likes",
    data: {like : {user_id: currentUserId, following_id: postId}}
  });
};

export const deleteFollow = (currentUserId, postId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/likes/${currentUserId}`,
    data: {like : {user_id: currentUserId, following_id: postId}}
  });
};
