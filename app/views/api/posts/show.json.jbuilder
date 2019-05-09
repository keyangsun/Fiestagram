json.post do 
    json.partial!('post', post: @post)
end 

json.user do
    json.partial!('/api/users/user', user: @post.user)
end 

json.comments do
    @post.comments.each do |comment|
        json.set! comment.id do 
            json.partial!('/api/comments/comment', comment: comment)
        end 
    end 
end 