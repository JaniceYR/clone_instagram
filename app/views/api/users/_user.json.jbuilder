json.extract! user, :id, :username, :name, :bio, :profile_pic_url

json.posts user.posts do |post|
  json.id post.id
  json.user_id post.user_id
  json.photo_url post.photo_url
  json.description post.description
  json.location post.location

  json.user post.user
end
