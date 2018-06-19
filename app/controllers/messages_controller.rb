class MessagesController < ApplicationController
  def create
    channel = Channel.find_by(channel_id: params[:channel_id])
    message = channel.messages.new(message_params)
    message.save
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
