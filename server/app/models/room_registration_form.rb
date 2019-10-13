# frozen_string_literal: true

class RoomRegistrationForm
  include ActiveModel::Model

  concerning :RoomBuilder do
    def room
      @room ||= Room.new
    end
  end

  attr_accessor :home_type, :room_type, :accommodate, :bed_room, :bath_room, :listing_name,
                :summary, :address, :is_tv, :is_kitchen, :is_air, :is_heating, :is_internet,
                :price, :photos_attributes, :user_id

  def save
    return false if invalid?

    room.assign_attributes(room_params)
    build_association

    if room.save!
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
      is_heating: is_heating,
      user_id: user_id
    }
  end

  def build_association
    photos_attributes.each do |image|
      room.photos << Photo.new(image: image)
    end
  end
end
