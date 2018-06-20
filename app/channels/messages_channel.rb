class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # channel = Channel.find(params[:channel_id])
    # stream_for channel

    stream_from "messages_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
