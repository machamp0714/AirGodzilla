# frozen_string_literal: true

module Authenticate
  def current_user
    if user_id = session[:user_id]
      @current_user ||= User.find_by(id: user_id)
    end
  end

  def login(user)
    session[:user_id] = user.id
  end

  def authenticate_with_token!
    render json: { error: 'Not Authenticated', is_success: false }, status: :unauthorized unless current_user.present?
  end
end
