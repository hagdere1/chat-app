class MessagesController < ApplicationController
  def index
    messages = Message.where(channel_id: params[:channel_id])
    render json: { status: "success", data: messages }, status: 200
  end

  def create
    channel = Channel.find_by(id: params[:channel_id])
    message = channel.messages.new(message_params)
    if message.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new(message)
      ).serializable_hash
      ActionCable.server.broadcast "messages_channel", serialized_data
      head :ok
    else
      render json: { message: "Error creating message" }
    end
  end

  def update
    message = Message.find_by(id: params[:id])
    if message.update(message_params)
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new(message)
      ).serializable_hash
      ActionCable.server.broadcast "messages_channel", serialized_data
      head :ok
    end
  end

  private
    def message_params
      params.require(:message).permit(:content, :channel_id, :user_id)
    end
end
