# == Schema Information
#
# Table name: follows
#
#  id           :integer          not null, primary key
#  following_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  follower_id  :integer          not null
#

class Follow < ApplicationRecord
  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :following,
    foreign_key: :following_id,
    class_name: :User
end
