# frozen_string_literal: true

class RoomRegistrationForm
  include ActiveModel::Model

  concerning :RoomBuilder do
    def room
      @room ||= Room.new
    end
  end

  attr_accessor :listing_name, :summary, :room_type, :home_type, :accommodate, :bed_room, :bath_room,
                :address, :price, :is_tv, :is_internet, :is_kitchen, :is_air, :is_heating, :user_id

  def save
    return false if invalid?

    room.assign_attributes(room_params)

    if room.save
      true
    else
      false
    end
  end

  private

  def room_params
    {
      listing_name: listing_name,
      summary: summary,
      room_type: room_type,
      home_type: home_type,
      accommodate: accommodate,
      bed_room: bed_room,
      bath_room: bath_room,
      address: address,
      price: price,
      is_tv: is_tv,
      is_internet: is_internet,
      is_kitchen: is_kitchen,
      is_air: is_air,
      is_heating: is_heating
    }
  end

  def build_association
    room.photos << photos
  end
end
