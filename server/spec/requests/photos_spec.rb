require 'rails_helper'

include ActionDispatch::TestProcess

RSpec.describe 'Photos', type: :request do
  let(:image_path) { Rails.root.join('spec', 'fixtures', 'R21.jpg') }
  let(:user) { FactoryBot.create(:alice) }
  let(:room) { FactoryBot.create(:instant_room, user: user) }
  let!(:photo) { FactoryBot.create(:photo, room: room) }

  it 'Adds a photo' do
    expect {
      post api_v1_room_photos_path(room),
           params: { photo: { image: fixture_file_upload(image_path) } }
    }.to change(room.photos, :count).by(1)
  end

  it 'delete a photo' do
    expect { delete api_v1_room_photo_path(room, photo) }.to change(
      Photo,
      :count
    )
      .by(-1)
  end
end
