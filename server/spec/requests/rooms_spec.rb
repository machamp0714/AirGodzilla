require 'rails_helper'

RSpec.describe 'Rooms API', type: :request do
  let(:user) { FactoryBot.create(:alice) }

  describe 'POST create' do
    let(:valid_params) { FactoryBot.attributes_for(:instant_room, user: user) }

    context 'when the request is valid' do
      it 'creates a room' do
        expect {
          post api_v1_rooms_path,
               params: { access_token: user.access_token, room: valid_params }
        }.to change(user.rooms, :count).by(1)

        expect(response).to have_http_status 200
      end
    end
  end

  describe 'DELETE' do
    let!(:room) { FactoryBot.create(:instant_room, user: user) }

    it 'delete a room' do
      expect { delete api_v1_room_path(room) }.to change(Room, :count).by(-1)
    end
  end
end
