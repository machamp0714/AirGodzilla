# frozen_string_literal: true

class Api::V1::SessionsController < ApplicationController
  before_action :authenticate_with_token!, only: %i[destroy]

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      login user
      user_serializer = UserSerializer.new(user)
      render json: { user: user_serializer, logged: true }, status: :ok
    else
      render json: { is_success: false }, status: 422
    end
  end

  def destroy
    session[:user_id] = nil
    head :no_content
  end

  def is_logged
    user = User.find_by(id: session[:user_id]) if session[:user_id]
    if user.present?
      render json: { user: user, logged_in: true }, status: :ok
    else
      render json: { logged_in: false }, status: :ok
    end
  end
end
