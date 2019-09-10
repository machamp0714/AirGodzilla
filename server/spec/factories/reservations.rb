# frozen_string_literal: true

FactoryBot.define do
  factory :reservation do
    start_date { '2019-09-07 15:00:00' }
    end_date { '2019-09-09 15:00:00' }
    price { 100 }
    total { 300 }
    association :user, factory: :bob
    association :room, factory: :alice_room
  end

  factory :invalid_reservation, class: 'Reservation' do
    start_date { '' }
    end_date { '' }
    price { 100 }
    total { 300 }
    association :user, factory: :bob
    association :room, factory: :alice_room
  end
end
