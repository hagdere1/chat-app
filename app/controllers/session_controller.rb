class SessionController < ApplicationController
  skip_before_action :require_login!, only: [:create], raise: false

  def create
    user = User.find_for_database_authentication(email: params[:email]) || User.new
    if user.valid_password?(params[:password])
      auth_token = user.generate_auth_token
      render json: { status: "success", data: auth_token }, status: 200
    else
      render json: { status: "failure", message: "Invalid username and/or password" }, status: 401
    end
  end

  def destroy
  end
end
