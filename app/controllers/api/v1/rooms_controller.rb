class Api::V1::RoomsController < ApplicationController

  def create
    @room = current_user.rooms.build(room_params)
    if @room.save
      render json: @room, status: :ok
    else
      render json: { error: @room.errors, is_success: false }, status: 422
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
