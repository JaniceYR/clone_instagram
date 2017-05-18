class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :photo_url
      t.text :description
      t.string :location

      t.index :user_id
      t.timestamps
    end
  end
end
