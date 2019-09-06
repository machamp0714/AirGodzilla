# frozen_string_literal: true

FactoryBot.define do
  factory :alice, class: 'User' do
    name { 'alice' }
    email { 'alice@gmail.com' }
    password { 'password' }
  end
end
