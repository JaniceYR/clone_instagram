class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :follow_id
      t.integer :following_id

      t.timestamps

      t.index :follow_id
      t.index :following_id
    end
  end
end
