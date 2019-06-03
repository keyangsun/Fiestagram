# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  post_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
    validates :post_id, presence: true 
    validates :user_id, presence: true 
    validates :post_id, uniqueness: {scope: :user_id}

    belongs_to :post
    belongs_to :user 
end
