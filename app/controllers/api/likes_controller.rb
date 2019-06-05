class Api::LikesController < ApplicationController
    before_action :require_logged_in 

    def create 
        @like = Like.new(like_params)
        @like.user_id = current_user.id 
        if @like.save 
            render :show, status: 200
        else 
            render json: @like.errors.full_messages, status: 418 
        end 
    end 
    
    def destroy 
        @like = Like.find_by_id(params[:id])
        if @like && @like.user_id == current_user.id && @like.destroy 
            render json: {}, status: 200 
        else 
            render json: ['unprocessable entity'], status: 422
        end 
    end 

    private 

    def like_params 
        params.require(:like).permit(:post_id)
    end 
end
