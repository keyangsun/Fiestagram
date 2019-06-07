class Api::PostsController < ApplicationController
    before_action :require_logged_in

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

    def update
        @post = Post.find_by(id: params[:id])
        if @post && @post.update(post_params) && @post.user_id == current_user.id
            @post = Post.includes(:user).with_attached_photo.where(id: @post.id)[0]
            render :show, status: 200
        else 
            render json: ['missing required field'], status: 422
        end 
    end 

    def destroy 
        @post = Post.find_by(id: params[:id])
        if @post && @post.user_id == current_user.id && @post.destroy && @post.photo.purge
            render json: {}, status: 200
        else 
            render json: ['Post not found'], status: 404
        end 
    end 

    def show
        @post = Post.with_attached_photo
            .includes(:comments, :likes, :user, :likers)
            .where(id: params[:id])[0]
        if @post 
            render :show, status: 200 
        else 
            render json: ["Post not found"], status: 404 
        end 
    end 

    def index
        @posts = Post.all
            .includes(:user, :comments, :likes, :likers)
            .with_attached_photo
        @comments = []
        @users = []
        @likes =[] 

        @posts.each do |post|
            @users << post.user 
            post.comments.each do |comment|
                @comments << comment 
            end 
            post.likes.each do |like|
                @likes << like
            end 
        end 
        render :index, status: 200  
    end 

    private 

    def post_params
        params.require(:post).permit(:location, :caption, :photo)
    end 
end
