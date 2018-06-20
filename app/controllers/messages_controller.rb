class MessagesController < ApplicationController
  def create
    channel = Channel.find_by(channel_id: params[:channel_id])
    message = channel.messages.new(message_params)

    if message.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new(message)
      ).serializable_hash
      MessagesChannel.broadcast_to channel, serialized_data
      head :ok
    end
  end

  def update
    message = Message.find_by(id: params[:id])
    message.update(message_params)
  end

  private
    def message_params
      params.require(:message).permit(:content, :channel_id, :user_id)
    end
end
