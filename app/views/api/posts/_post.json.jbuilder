json.extract! post, :id, :user_id, :photo_url, :description, :location, :created_at
json.comments post.comments.each do |comment|

end
