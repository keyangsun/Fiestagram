json.extract!(post, :id, :user_id, :location, :caption, :updated_at, :comment_ids, :liker_ids, :like_ids)
json.photoUrl url_for(post.photo)