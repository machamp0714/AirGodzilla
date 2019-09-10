class RoomSerializer < ActiveModel::Serializer
  attributes :id, :listing_name, :address, :home_type, :bed_room, :bath_room, :summary,
            :price, :active, :image, :unavailable_dates
  
  def image
    @instance_options[:image]
  end

  def unavailable_dates
    @instance_options[:unavailable_dates]
  end

  class UserSerializer < ActiveModel::Serializer
    attributes :email, :name
  end

  belongs_to :user, serializer: UserSerializer, key: :host
end
