# frozen_string_literal: true

class Room < ApplicationRecord
  enum instant: { Request: 0, Instant: 1 }

  geocoded_by :address
  after_validation :geocode, if: :address_changed?

  belongs_to :user
  has_many :photos, dependent: :destroy
  has_many :reservations, dependent: :destroy

  validates :home_type, presence: true
  validates :room_type, presence: true
  validates :accommodate, presence: true
  validates :bed_room, presence: true
  validates :bath_room, presence: true

  def cover_photo
    if photos.present?
      photos[0].image_url
    else
      'public/system/photos/images/blank.jpg'
    end
  end
end
