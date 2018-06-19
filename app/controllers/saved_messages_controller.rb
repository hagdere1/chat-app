class SavedMessagesController < ApplicationController
  def create
    saved_message = SavedMessage.create(saved_messages_params)
    saved_message.save
  end

  def destroy
    saved_message.find_by(id: params[:id]).destroy
  end

  private
    def saved_messages_params
      params.require(:saved_messages).permit(:user_id, :message_id)
    end
end
