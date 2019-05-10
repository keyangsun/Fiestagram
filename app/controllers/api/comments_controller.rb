class Api::CommentsController < ApplicationController

    def create 
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id 
        if @comment.save 
            
            render :show, status: 200 
        else 
            render json: @comment.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment && @comment.user_id == current_user.id && @comment.destroy 
            render json: {}, status: 200 
        else 
            render json: ['Comment not found'], status: 404 
        end 
    end 

    private 

    def comment_params 
        params.require(:comment).permit(:post_id, :content)
    end 
end
