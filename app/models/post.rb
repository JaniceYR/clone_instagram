# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  photo_url   :string
#  description :text
#  location    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Post < ApplicationRecord
  validates :user_id, :photo_url, presence: true

  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy

  belongs_to :user
end
