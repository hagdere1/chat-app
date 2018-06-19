class UsersController < ApplicationController
  skip_before_action :require_login!, only: [:create]

  def create
    # create and add new user to a general chatroom
    user = Channel.find_by(name: "General").users.new(user_params)

    if user.save
      # login user
      auth_token = user.generate_auth_token
      render json: { status: "success", data: auth_token }, status: 200
    else
      render json: { status: "failure", message: "Failed to create user" }, status: 500
    end
  end

  def update
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
