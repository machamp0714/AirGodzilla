# frozen_string_literal: true

class Api::V1::PhotosController < ApplicationController
  def create
    room = Room.find(params[:room_id])
    photo = room.photos.build(photo_params)

    if photo.save
      render json: { photo: photo, is_success: true }, status: :created
    else
      render json: { is_success: false }, status: 404
    end
  end

  def destroy
    Photo.find(params[:id]).destroy

    head :no_content
  end

  private

  def photo_params
    params.require(:photo).permit(:image)
  end
end
