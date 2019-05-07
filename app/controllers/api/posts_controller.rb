class Api::PostsController < ApplicationController

    def create
        if post_params.values[2].class == ActionDispatch::Http::UploadedFile
            @post = Post.new(post_params)
            @post.user_id = current_user.id
            if @post.save
                render :show, status: 200 
            else 
                render json: ['missing required field'], status: 422
            end 
        else
            render json: ["No photo attachment detected"], status: 422
        end 
    end 

    def destroy 
        @post = Post.find_by(id: params[:id])
        if @post && @post.destroy
            render json: {}, status: 200
        else 
            render json: ['Post not found'], status: 404
        end 
    end 

    def show
        @post = Post.find_by(id: params[:id])
        if @post 
            render :show
        else 
            render json: ["Post not found"], status: 404 
        end 
    end 

    def index
        @posts = Post.all.includes(:user)
        render :index 
    end 

    private 

    def post_params
        params.require(:post).permit(:location, :caption, :photo)
    end 
end