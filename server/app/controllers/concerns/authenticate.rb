# frozen_string_literal: true

module Authenticate
  def current_user
    @user ||= User.find_by(access_token: params[:access_token])
  end

  def login(user)
    session[:user_id] = user.id
  end

  def authenticate_with_token!
    render json: { error: 'Not Authenticated', is_success: false }, status: :unauthorized unless current_user.present?
  end
end
