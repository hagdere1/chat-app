class MessageSerializer < ActiveModel::Serializer
  attributes :id, :channel_id, :content, :created_at
end
