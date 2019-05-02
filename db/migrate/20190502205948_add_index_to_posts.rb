class AddIndexToPosts < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :user_id, :integer, null:false 
    change_column :posts, :caption, :text, null:false
  end
end
