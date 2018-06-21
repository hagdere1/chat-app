class MessageSerializer < ActiveModel::Serializer
  # We also need username!
  attributes :id, :channel_id, :user_id, :content, :created_at
  belongs_to :user, serializer: MessageUserSerializer
end
