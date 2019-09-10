class AddLatitudeAndLongitudeToRooms < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :latitude, :float
    add_column :rooms, :longitude, :float

    add_index :rooms, [:latitude, :longitude]
  end
end
