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
    user = User.find_by(access_token: params[:access_token])
    user
  end
end
