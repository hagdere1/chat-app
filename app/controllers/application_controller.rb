class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
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
        User.find_by(auth_token: token)
      end
    end
end
