class MessageSave < ApplicationRecord
  belongs_to :message
  belongs_to :user
  belongs_to :owner, class_name: "User", foreign_key: "owner_id"
end
