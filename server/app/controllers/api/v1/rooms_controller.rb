# frozen_string_literal: true

class Api::V1::RoomsController < ApplicationController
  def index
    rooms = Room.where(active: true)

    render json: rooms, status: :ok
  end

  def create
    room_registration_form = RoomRegistrationForm.new(room_registration_form_params.merge(user_id: current_user.id))

    if room_registration_form.save
      render json: { room: room_registration_form }, status: :created
    else
      render json: { error: room.errors, is_success: false }, status: 422
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

  def update
    room = Room.find(params[:id])

    if room.update(room_params)
      render json: { room: room, is_success: true }, status: :ok
    else
      render json: { is_success: false }, status: 422
    end
  end

  def destroy
    Room.find(params[:id]).destroy
    head :no_content
  end

  def your_listings
    rooms = current_user.rooms
    render json: {
      rooms: rooms.map { |r| r.attributes.merge(image: r.cover_photo, instant: r.instant != 'Request') },
      is_success: true
    }, status: :ok
  end

  def your_room
    room = Room.find(params[:id])

    if room.present?
      room_serializer = RoomSerializer.new(room)
      render json: { room: room_serializer, is_success: true }, status: :ok
    else
      render json: { is_success: false }, status: 404
    end
  end

  private

  def room_registration_form_params
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
      :price,
      photos_attributes: []
    )
  end
end
