json.posts @posts.reverse.each do |post|
  json.partial! "api/posts/post", post: post
end
