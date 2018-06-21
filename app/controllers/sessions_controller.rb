class SessionsController < ApplicationController
  skip_before_action :require_login!, only: [:create], raise: false

  def create
    user = User.find_for_database_authentication(email: params[:user][:email]) || User.new
    if user.valid_password?(params[:user][:password])
      auth_token = user.generate_auth_token
      render json: { status: "success", data: user }, status: 200
    else
      render json: { status: "failure", message: "Invalid username and/or password" }, status: 401
    end
  end

  def destroy
    authenticate_with_http_token do |token, options|
      user = User.find_by(auth_token: token)
      user.reset_auth_token
    end
    render json: { status: "success" }, status: 200
  end
end
