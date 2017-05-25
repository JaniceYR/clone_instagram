json.users @users.each do |user|
  json.partial! "api/users/user", user: user
end
# @users.each do |user|
#   json.set! user.id do
#     json.partial! "api/users/user", user: user
#   end
# end
# 
#
# json.extract! user, :id, :username, :name, :bio, :profile_pic_url
#
# json.posts user.posts.reverse do |post|
#   json.id post.id
#   json.photo_url post.photo_url
#   json.likes_count post.likes.count
#   json.comments_count post.comments.count
#   json.location post.location
#   json.created post.created_at
# end
#
# json.posts_count user.posts.count
# json.followings_count user.followings.count
# json.followers_count user.followers.count
#
# if user.followers.find_by(follower_id: current_user.id)
#   json.followed true
# else
#   json.followed false
# end
