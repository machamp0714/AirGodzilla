FactoryBot.define do
  factory :instant_room, class: "Room" do
    home_type { "private" }
    room_type { "relax" }
    accommodate { 3 }
    bed_room { 4 }
    bath_room { 1 }
    listing_name { "Beautiful room for you" }
    summary { "good place!" }
    address { "東京駅" }
    is_tv { true }
    is_kitchen { true }
    is_air { true }
    is_heating { true }
    is_internet { true }
    price { 100 }
    active { true }
    association :user, factory: :alice
    instant { 1 }
  end

  factory :request_room, class: "Room" do
    home_type { "private" }
    room_type { "relax" }
    accommodate { 3 }
    bed_room { 4 }
    bath_room { 1 }
    listing_name { "Beautiful room for you" }
    summary { "good place!" }
    address { "東京駅" }
    is_tv { true }
    is_kitchen { true }
    is_air { true }
    is_heating { true }
    is_internet { true }
    price { 100 }
    active { true }
    association :user, factory: :alice
    instant { 0 }
  end
end
