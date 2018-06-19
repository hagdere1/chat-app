class CreateJoinTableChannelUser < ActiveRecord::Migration[5.2]
  def change
    create_join_table :channels, :users do |t|
      t.index [:channel_id, :user_id]
    end
  end
end
