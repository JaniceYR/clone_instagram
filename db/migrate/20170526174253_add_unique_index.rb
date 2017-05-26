class AddUniqueIndex < ActiveRecord::Migration[5.0]
  def change
    add_index :follows, [:following_id, :follower_id], unique: true
  end
end
