json.post do 
    json.partial!('post', post: @post)
end 

json.user do
    json.partial!('/api/users/user', user: @post.user)
end 

json.likes do 
    @post.likes.each do |like|
        json.set! like.id do 
            json.partial!('/api/likes/like', like: like)
        end
    end 
end 

json.comments do
    @post.comments.each do |comment|
        json.set! comment.id do 
            json.partial!('/api/comments/comment', comment: comment)
        end 
    end 
end 