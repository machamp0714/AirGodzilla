include ActionDispatch::TestProcess

FactoryBot.define do
  factory :photo do
    image do
      fixture_file_upload(Rails.root.join('spec', 'fixtures', 'R21.jpg'))
    end
    association :room, factory: :alice_room
  end
end
