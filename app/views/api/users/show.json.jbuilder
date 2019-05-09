json.user do
    json.set! @user.id do 
        json.partial!('user', user: @user)
    end   
end  

json.posts do 
    @posts.each do |post|
        json.set! post.id do
            json.partial!('/api/posts/post', post: post)
        end 
    end 
end 