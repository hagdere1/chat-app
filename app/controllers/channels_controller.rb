class ChannelsController < ApplicationController
  def index
    channels = Channel.all
    render json: { status: "success", data: channels }, status: 200
  end

  def join
    channel = Channel.find_by(params[:id])
    channel.users << User.find_by(params[:user_id])
  end
end
