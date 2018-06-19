class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel
  has_many :message_saves
end
