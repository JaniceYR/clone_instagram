class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render "api/comments/show"
      # render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
      render json: @comment
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :post_id, :body)
  end
end
