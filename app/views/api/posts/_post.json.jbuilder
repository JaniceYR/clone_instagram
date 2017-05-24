json.extract! post, :id, :user_id, :photo_url, :description,
                    :location, :created_at

json.comments post.comments.each do |comment|
  json.partial! 'api/comments/comment', comment: comment
end

if post.likes.find_by(user_id: current_user.id)
  json.liked true
else
  json.liked false
end

json.likes_count post.likes.count
json.comments_count post.comments.count

json.user do
  json.username post.user.username
  json.profile_pic_url post.user.profile_pic_url
end
