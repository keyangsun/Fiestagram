# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :user_id, :post_id, :content, presence: true

    belongs_to :user 
    belongs_to :post 
end
