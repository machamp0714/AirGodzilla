# frozen_string_literal: true

class Api::V1::UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :ok
    else
      render json: { errors: user.errors, is_success: false }, status: 422
    end
  end

  private

  def user_params
    params.permit(:name, :email, :password)
  end
end
