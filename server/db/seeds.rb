include ActionDispatch::TestProcess

# Users
User.create!(name: 'alice', email: 'alice@gmail.com', password: 'password')
User.create!(name: 'bob', email: 'bob@gmail.com', password: 'password')

# Rooms
alice = User.first
alice.rooms.create!(
  home_type: 'shared',
  room_type: 'entire',
  accommodate: 4,
  bed_room: 4,
  bath_room: 1,
  listing_name: 'Beautifule Room',
  summary: Faker::Lorem.sentence,
  address: '東京駅',
  is_tv: true,
  is_kitchen: true,
  is_air: true,
  is_heating: true,
  is_internet: true,
  price: 150,
  active: true
)
alice.rooms.create!(
  home_type: 'private',
  room_type: 'entire',
  accommodate: 2,
  bed_room: 2,
  bath_room: 1,
  listing_name: 'Good place for you',
  summary: Faker::Lorem.sentence,
  address: '新鹿沼駅',
  is_tv: true,
  is_kitchen: false,
  is_air: true,
  is_heating: true,
  is_internet: true,
  price: 100,
  active: true,
  instant: 0
)

bob = User.find(2)
bob.rooms.create!(
  home_type: 'private',
  room_type: 'entire',
  accommodate: 1,
  bed_room: 1,
  bath_room: 1,
  listing_name: 'Relax Room',
  summary: Faker::Lorem.sentence,
  address: '楡木駅',
  is_tv: false,
  is_kitchen: false,
  is_air: true,
  is_heating: true,
  is_internet: true,
  price: 100,
  active: true,
  instant: 1
)

# Photos
rooms = Room.all
rooms.each do |room|
  room.photos.create!(
    image:
      fixture_file_upload(
        Rails.root.join(
          'public',
          'system',
          'photos',
          'images',
          '000',
          '000',
          '001',
          'medium',
          'R21.jpg'
        )
      )
  )
end
