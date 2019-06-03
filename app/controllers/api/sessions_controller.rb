class Api::SessionsController < ApplicationController
    before_action :require_logged_out, only: [:create]

    def create
        email = params[:user][:email]
        password = params[:user][:password]
        @user = User.find_by_credentials(email, password)
        if @user
            login!(@user)
            render :show, status: 200 
        else 
            render json: ['Invalid credentials'], status: 422
        end     
    end 

    def destroy  
        if logged_in?
            logout!
            render json: {}, status: 200 
        else 
            render json: ['User not found'], status: 404
        end 
    end 
end
