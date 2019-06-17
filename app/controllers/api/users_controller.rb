class Api::UsersController < ApplicationController
    before_action :require_logged_in, only: [:show, :search]
    before_action :require_logged_out, only: [:create]
    
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

    def search 
        @users = User.search(params[:username])
        if @users.any? 
            render :search, status: 200
        else 
            render json: {users: { none: '404'}}, status: 200
        end 
    end 

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end 
end

