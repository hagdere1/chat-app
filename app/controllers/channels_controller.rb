class ChannelsController < ApplicationController
  def index
    channel = Channel.all
  end

  def join
    channel = Channel.find_by(params[:id])
    channel.users << User.find_by(params[:user_id])
  end
end
