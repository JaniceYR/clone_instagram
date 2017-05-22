export const createFollow = (followerId, followingId) => {
  return $.ajax({
    method: "POST",
    url: "api/follows",
    data: {follow : {followerId, followingId}}
  });
};

export const deleteFollow = (followerId, followingId) => {
  return $.ajax({
    method: "GET",
    url: "api/follows/delete",
    data: {follow : {followerId, followingId}}
  });
};
