# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Reservations API', type: :request do
  let(:host) { FactoryBot.create(:alice) }
  let(:guest) { FactoryBot.create(:bob) }

  describe 'when the request is valid' do
    before do
      @room = FactoryBot.create(:alice_room, user: host)
    end

    let(:valid_attributes) { FactoryBot.attributes_for(:reservation, user: guest, room: @room) }

    it 'create a reservation' do
      expect do
        post api_v1_room_reservations_path(@room), params: {
          access_token: guest.access_token,
          reservation: valid_attributes
        }
      end.to change(guest.reservations, :count).by(1)

      expect(response).to have_http_status 201
    end
  end
end
