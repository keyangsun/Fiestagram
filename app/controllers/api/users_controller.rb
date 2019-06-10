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
        query = params[:username] + "%"; 
        @users = User.where("LOWER(username) LIKE LOWER(?)", query)
            .order("users.created_at DESC");
        if @users.any? 
            render :search, status: 200
        else 
            render json: {}, status: 404
        end 
    end 

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end 
end

