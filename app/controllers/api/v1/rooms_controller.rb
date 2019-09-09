# frozen_string_literal: true

class Api::V1::RoomsController < ApplicationController
  def index
    rooms = Room.where(active: true)

    render json: rooms, status: :ok
  end

  def create
    @room = current_user.rooms.build(room_params)
    if @room.save
      render json: @room, status: :ok
    else
      render json: { error: @room.errors, is_success: false }, status: 422
    end
  end

  def show
    room = Room.find(params[:id])

    today = Date.today
    reservations = room.reservations.where(
      'room_id = ? AND (start_date > ? AND end_date > ?) AND status = ?',
      params[:id], today, today, 1
    )

    unavailable_dates = reservations.map do |r|
      (r.start_date.to_datetime..r.end_date.to_datetime).map do |date|
        date.strftime('%Y-%m-%d')
      end
    end.flatten.to_set

    if !room.nil?
      room_serializer = RoomSerializer.new(
        room,
        image: room.cover_photo,
        unavailable_dates: unavailable_dates
      )
      render json: { room: room_serializer, is_success: true }, status: :ok
    else
      render json: { error: 'Invalid ID', is_success: false }, status: 422
    end
  end

  def destroy
    Room.find(params[:id]).destroy
    head :no_content
  end

  private

  def room_params
    params.require(:room).permit(
      :home_type,
      :room_type,
      :accommodate,
      :bed_room,
      :bath_room,
      :listing_name,
      :summary,
      :address,
      :is_tv,
      :is_kitchen,
      :is_air,
      :is_heating,
      :is_internet,
      :price
    )
  end
end
