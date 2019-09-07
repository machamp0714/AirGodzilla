# frozen_string_literal: true

class Api::V1::ReservationsController < ApplicationController
  def create
    room = Room.find(params[:room_id])

    start_date = DateTime.parse(reservation_params[:start_date])
    end_date = DateTime.parse(reservation_params[:end_date])
    days = end_date - start_date + 1

    reservation = current_user.reservations.build(reservation_params)
    reservation.room = room
    reservation.price = room.price
    reservation.total = room.price * days

    if reservation.save
      render json: { is_success: true }, status: :created
    else
      render json: { error: reservation.errors, is_success: false }, status: :unprpcessable_entity
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:start_date, :end_date)
  end
end
