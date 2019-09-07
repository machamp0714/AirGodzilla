# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Reservations API', type: :request do
  let(:host) { FactoryBot.create(:alice) }
  let(:guest) { FactoryBot.create(:bob) }

  before do
    @room = FactoryBot.create(:alice_room, user: host)
  end

  describe 'when the request is valid' do
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

  describe 'when the request is invalid' do
    let(:invalid_attributes) { FactoryBot.attributes_for(:invalid_reservation, user: host, room: @room) }

    context 'user equal the room host user' do
      it 'responds 404 error' do
        post api_v1_room_reservations_path(@room), params: {
          access_token: host.access_token,
          reservation: invalid_attributes
        }
        expect(response).to have_http_status 404
      end
    end

    context 'invalid request' do
      it 'returns a alert message' do
        post api_v1_room_reservations_path(@room), params: {
          access_token: guest.access_token,
          reservation: invalid_attributes
        }
        expect(response.body).to include 'Invalid request!'
      end
    end
  end
end
