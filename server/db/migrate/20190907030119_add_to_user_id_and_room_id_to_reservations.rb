# frozen_string_literal: true

class AddToUserIdAndRoomIdToReservations < ActiveRecord::Migration[5.2]
  def change
    add_reference :reservations, :user, foreign_key: true
    add_reference :reservations, :room, foreign_key: true
  end
end
