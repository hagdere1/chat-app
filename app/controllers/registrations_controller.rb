class RegistrationsController < ApplicationController
  skip_before_action :require_login!, only: [:create]

  def create
    # create and add new user to a general chatroom
    user = Channel.find_by(name: "General").users.new(user_params)

    if user.save
      auth_token = user.generate_auth_token
      render json: { status: "success", data: user }, status: 200
    else
      render json: { message: "Failed to create user" };
    end
  end

  def update
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
