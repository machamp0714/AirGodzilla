# frozen_string_literal: true

class AddStatusToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :status, :integer, default: 0
  end
end
