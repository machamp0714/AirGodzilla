# frozen_string_literal: true

class RenameColumnReservations < ActiveRecord::Migration[5.2]
  def change
    rename_column :reservations, :start_time, :start_date
    rename_column :reservations, :end_time, :end_date
  end
end
