# frozen_string_literal: true

class Api::V1::UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      login user
      render json: { user: user }, status: :created
    else
      render json: { errors: user.errors, is_success: false }, status: 422
    end
  end

  def add_card
    user = User.find(current_user.id)
    if user.stripe_id.blank?
      customer = Stripe::Customer.create(email: user.email)
      user.stripe_id = customer.id
      user.save
    else
      customer = Stripe::Customer.retrieve(user.stripe_id)
    end

    month, year = params[:expire].split('/')
    new_token =
      Stripe::Token.create(
        card: {
          number: params[:number],
          exp_month: month,
          exp_year: year,
          cvc: params[:cvc]
        }
      )
    customer.sources.create(source: new_token.id)

    render json: { message: 'Your card is saved', is_success: true },
           status: :ok
    # logger.debug user.errors.inspect
  rescue Stripe::CardError => e
    render json: { error: e.message, is_success: false }, status: 404
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
