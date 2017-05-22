class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.text :body, null: false

      t.timestamps

      t.index :user_id
      t.index :post_id
    end
  end
end
