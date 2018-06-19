class ApplicationController < ActionController::Base
  before_action :require_login!

  def require_login!
    return true if authenticate
    render json: { message: "Access denied" }, status: 401
  end

  def current_user
    authenticate
  end

  private
    def authenticate
      authenticate_with_http_token do |token, options|
        User.find_by(auth_token: token).first
      end
    end
end
