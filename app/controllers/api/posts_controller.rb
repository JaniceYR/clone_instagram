class Api::PostsController < ApplicationController

  def show
    @post = Post.find(params[:id])
    if @post
      render :show
    end
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      login(@post)
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post
      render :show
    else
      render json: ['Post is not exist'], status: 422
    end
  end

  private

  def post_params
    params.require(:post)
          .permit(:user_id, :photo_url, :description, :location)
  end
end
