# frozen_string_literal: true

class Api::V1::SessionsController < ApplicationController
  before_action :authenticate_with_token!, only: %i[destroy]

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      login user
      render json: { user: user, logged: true }, status: :ok
    else
      render json: { is_success: false }, status: 422
    end
  end

  def destroy
    session[:user_id] = nil
    head :no_content
  end

  def is_logged
    if session[:user_id]
      user = User.find_by(id: session[:user_id])
      render json: { user: user, logged_in: true }, status: :ok
    end
  end
end
