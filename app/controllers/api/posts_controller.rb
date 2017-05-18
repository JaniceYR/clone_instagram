class Api::PostsController < ApplicationController

  def show
    @post = Post.find(params[:id])
    if @post
      render "/api/posts/show"
    end
  end

  def create
    @post = Post.new(post_params)
    @photo.user_id = current_user.id
    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post
      @post.destroy
      render json: @post
    else
      render json: ['Post is not exist'], status: 404
    end
  end

  private

  def post_params
    params.require(:post)
          .permit(:user_id, :photo_url, :description, :location)
  end
end
