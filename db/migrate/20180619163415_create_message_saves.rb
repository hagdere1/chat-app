class CreateMessageSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :message_saves do |t|
      t.references :user
      t.references :owner
      t.references :message
      t.timestamps
    end
  end
end
