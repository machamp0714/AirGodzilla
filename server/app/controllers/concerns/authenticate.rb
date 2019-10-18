# frozen_string_literal: true

module Authenticate
  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def login(user)
    session[:user_id] = user.id
  end

  def authenticate_with_token!
    unless current_user.present?
      render json: { error: 'Not Authenticated', is_success: false },
            status: :unauthorized
    end
  end
end
