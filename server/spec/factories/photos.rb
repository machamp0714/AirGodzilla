include ActionDispatch::TestProcess

FactoryBot.define do
  factory :photo do
    image { fixture_file_upload(Rails.root.join("spec", "fixtures", "R21.jpg")) }
    association :room, factory: :alice_room
  end
end
