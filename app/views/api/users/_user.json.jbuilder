json.extract! user, :id, :username, :name, :bio, :profile_pic_url

json.posts user.posts do |post|
  json.id post.id
  json.user_id post.user_id
  json.photo_url post.photo_url
  json.description post.description
  json.location post.location

  json.likes_count post.likes.count
  json.comments_count post.comments.count
end

json.followings user.followings do |following|
  json.following_id following.following_id
end

json.followers user.followers do |follower|
  json.follower_id follower.follower_id
end
