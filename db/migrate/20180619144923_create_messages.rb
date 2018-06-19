class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :content, null: false
      t.references :user
      t.references :channel

      t.timestamps
    end
  end
end
