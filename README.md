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

## Future Features 
* Follows
* User profile editing
* Infinite Scrolling 

## Code Snippets
* User Search
    - utilized Active Record query methods to define a search function in the User model
        `
        class User < ApplicationRecord

            ...

            def self.search(query)
                query = query + "%"
                users = User.where("LOWER(username) LIKE LOWER(?)", query)
                    .order("users.created_at DESC")
                return users 
            end
        
        end 
        `
    




