json.extract! post, :id, :user_id, :created_at

json.comments post.comments.each do |comment|
  json.partial! 'api/comments/comment', comment: comment
end

if post.likes.find_by(user_id: current_user.id)
  json.liked true
else
  json.liked false
end
