require 'rails_helper'

RSpec.describe "Rooms API", type: :request do
  let(:user) { FactoryBot.create(:alice) }
  let(:valid_params) { FactoryBot.attributes_for(:alice_room, user: user) }

  describe "POST create" do
    context "when the request is valid" do
      it "creates a room" do
        expect {
          post api_v1_rooms_path, params: {
            access_token: user.access_token,
            room: valid_params
          }
        }.to change(user.rooms, :count).by(1)

        expect(response).to have_http_status 200
      end
    end
  end
end
