class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :new, status: 200
        else 
            render json: @user.errors.full_messages, status: 422
        end 
    end 

    def show
        @user = User.where(id: params[:id]).includes(:posts)[0]
        @posts = @user.posts.with_attached_photo
        if @user 
            render :show
        else 
            render json: ["User not found"], status: 404 
        end 
    end 

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end 
end

