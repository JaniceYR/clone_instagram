# json.posts @posts.reverse.each do |post|
#   json.partial! "api/posts/post", post: post
# end
@posts.each do |post|
  json.set! post.id do
    json.partial! "api/posts/post", post: post
  end
end
