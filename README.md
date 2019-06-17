# Fiestagram 

[Live Demo](https://fiestagram-ks.herokuapp.com/)

Fiestagram is a social media web application inspired by Instagram. The project was designed and implemented within a 2 week period. Current features include User authentication, Posts CRUD (create, read, update and delete) and comments, likes, and user search.

## Technologies  
* Ruby v-2.5.1
* Rails v-5.2.3
* PostGreSQL
* React.js
* Redux
* Javascript/ES6
* AWS S3

## Current Features
* User authentication 
* Posting CRUD 
* Comments
* Likes
* User search 

## Code Snippets
* User Search
    - utilized Active Record query methods to define a search function in the User model:
        ```
        class User < ApplicationRecord
            def self.search(query)
                query = query + "%"
                users = User.where("LOWER(username) LIKE LOWER(?)", query)
                    .order("users.created_at DESC")
                return users 
            end
        end
        ```
    - utilized debounce from lodash to delay api search request in the frontend:   
        ```
        import React from 'react'; 
        import { debounce } from 'lodash'; 

        class SearchBar extends React.Component {
            constructor(){
                super(props); 
                this.state = {
                    searchStr: ''
                }; 
                this.debouncedSearch = debounce(this.handleSearch, 500); 
                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(e) {
                this.setState(
                    {searchStr: e.target.value},
                    () => this.debouncedSearch(this.state.searchStr)); 
            }

            handleSearch(query) {
                this.props.searchUsers(query)
                    .then( () => { // UI stuff // }); 
            }

            render() {
                return(
                    <input type="text" 
                    placeholder="Search"  
                    value={this.state.searchStr}
                    onChange={this.handleChange}/>
                );
            }   
        }
        export default SearchBar
        ```
* Post CRUD
    - Using Active Record includes method to avoid N+1 queries
        ```
        class Api::PostsController < ApplicationController
            before_action :require_logged_in
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
        end 
        ```
## Future Features 
* Follows
* User profile editing
* Infinite Scrolling 






