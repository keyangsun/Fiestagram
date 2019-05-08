json.posts do 
    @posts.each do |post|
        json.set! post.id do
            json.partial!('post', post: post)
        end 
    end 
end 

json.users do 
    @posts.each do |post|
        json.set! post.user_id do 
            json.partial!('/api/users/user', user: post.user)
        end 
    end 
end 

json.comments do 
    @comments.each do |comment|
        json.set! comment.id do
            json.partial!('/api/comments/comment',comment: comment)
        end 
    end 
end 