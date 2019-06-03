# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  location   :string
#  caption    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
    validates :caption, :user_id, presence: true
    validate :ensure_attachment
    
    has_one_attached :photo
    belongs_to :user
    has_many :comments
    has_many :likes 
    has_many :likers, through: :likes, source: :user

    def ensure_attachment
        unless self.photo.attached? 
            errors[:post] << "has no attached photo"
        end 
    end 
end
