json.extract! post, :id, :user_id, :photo_url, :description, :location, :created_at

json.likes post.likes
json.comments post.comments.each do |comment|
  json.partial! 'api/comments/comment', comment: comment
end
