json.extract!(post, :id, :user_id, :location, :caption, :updated_at)
json.photoUrl url_for(post.photo)