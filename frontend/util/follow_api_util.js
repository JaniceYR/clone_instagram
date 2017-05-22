export const createFollow = (followerId, followingId) => {
  return $.ajax({
    method: "POST",
    url: "api/follows",
    data: {follow : {follower_id: followerId, following_id: followingId}}
  });
};

export const deleteFollow = (followerId, followingId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${followerId}`,
    data: {follow : {follower_id: followerId, following_id: followingId}}
  });
};
