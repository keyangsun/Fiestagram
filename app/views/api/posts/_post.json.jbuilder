json.extract!(post, :id, :user_id, :location, :caption)
json.photoUrl url_for(post.photo)