class Api::V1::PhotosController < ApplicationController

  def create
    room = Room.find(params[:room_id])
    @photo = room.photos.create(photo_params)

    render json: photo, status: :ok
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
