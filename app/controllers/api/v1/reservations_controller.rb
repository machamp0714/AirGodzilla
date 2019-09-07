# frozen_string_literal: true

class Api::V1::ReservationsController < ApplicationController
  def create
    room = Room.find(params[:room_id])

    if current_user == room.user
      render json: { alert: 'You cannot book your own property!', is_success: false }, status: 404
    else
      if reservation_params[:start_date].present? && reservation_params[:end_date].present?
        start_date = DateTime.parse(reservation_params[:start_date])
        end_date = DateTime.parse(reservation_params[:end_date])
        days = end_date - start_date + 1

        reservation = current_user.reservations.build(reservation_params)
        reservation.room = room
        reservation.price = room.price
        reservation.total = room.price * days

        if reservation.Waiting!
          if room.Request?
            render json: { message: 'Request sent successfully', is_success: true }, status: :ok
          else
            render json: { message: 'Reservation created successfully', is_success: true }, status: :ok
          end
        else
          render json: { error: 'cannot make a reservation!', is_success: false }, status: 404
        end
      else
        render json: { alert: 'Invalid request!', is_success: false }, status: 404
      end
    end
  end

  def approve
    reservation = Reservation.find(params[:id])
    if current_user.id == reservation.room.user_id
      reservation.Approved!
      render json: { is_success: true }, status: :ok
    else
      render json: { error: 'No Permission', is_success: false }, status: 404
    end
  end

  def dicline
    reservation = Reservation.find(params[:id])
    if current_user.id == reservation.room.user_id
      reservation.Dicline!
      render json: { is_success: true }, status: :ok
    else
      render json: { error: 'No Permission', is_success: false }, status: 404
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:start_date, :end_date)
  end
end
