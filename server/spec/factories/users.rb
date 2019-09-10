# frozen_string_literal: true

FactoryBot.define do
  factory :alice, class: 'User' do
    name { 'alice' }
    email { 'alice@gmail.com' }
    password { 'password' }
    stripe_id { 'cus_Flp7h8wmTzUVfy' }
  end

  factory :bob, class: 'User' do
    name { 'tatsube' }
    email { 'tatsube@gmail.com' }
    password { 'password' }
    access_token { 'VaGa5wCA3TmB4QdHD9VD63WR' }
    stripe_id { 'cus_Flp7h8wmTzUVfy' }
  end

  factory :carol, class: 'User' do
    name { 'carol' }
    email { 'carol@gmail.com' }
    password { 'password' }
    stripe_id { nil }
  end
end
