class Photo < ApplicationRecord
  mount_uploader :image, PhotoUploader

  belongs_to :room
end
