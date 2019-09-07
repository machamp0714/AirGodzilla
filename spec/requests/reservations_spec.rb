# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Reservations API', type: :request do
  let(:host) { FactoryBot.create(:alice) }
  let(:guest) { FactoryBot.create(:bob) }

  before do
    @instant_room = FactoryBot.create(:instant_room, user: host)
    @request_room = FactoryBot.create(:request_room, user: host)
  end

  describe 'when the request is valid' do
    let(:valid_attributes) { FactoryBot.attributes_for(:reservation, user: guest, room: @instant_room) }

    context 'room is instant' do
      it 'make a reservation' do
        expect do
          post api_v1_room_reservations_path(@instant_room), params: {
            access_token: guest.access_token,
            reservation: valid_attributes
          }
        end.to change(guest.reservations, :count).by(1)

        expect(response).to have_http_status 200
        expect(response.body).to include "Reservation created successfully"
      end
    end

    context 'room is request' do
      it 'make a reservation' do
        expect do
          post api_v1_room_reservations_path(@request_room), params: {
            access_token: guest.access_token,
            reservation: valid_attributes
          }
        end.to change(guest.reservations, :count).by(1)

        expect(response).to have_http_status 200
        expect(response.body).to include "Request sent successfully"
      end
    end
  end

  describe 'when the request is invalid' do
    let(:invalid_attributes) { FactoryBot.attributes_for(:invalid_reservation, user: host, room: @instant_room) }

    context 'user equal the room host user' do
      it 'responds 404 error' do
        post api_v1_room_reservations_path(@instant_room), params: {
          access_token: host.access_token,
          reservation: invalid_attributes
        }
        expect(response).to have_http_status 404
      end
    end

    context 'invalid request' do
      it 'returns a alert message' do
        post api_v1_room_reservations_path(@instant_room), params: {
          access_token: guest.access_token,
          reservation: invalid_attributes
        }
        expect(response.body).to include 'Invalid request!'
      end
    end
  end

  before do
    @reservation = FactoryBot.create(:reservation, user: guest, room: @instant_room)
  end

  describe 'booking with approve function' do
    context 'have a permisson' do
      it 'responds a status 200' do
        patch approve_api_v1_room_reservation_path(@instant_room, @reservation), params: {
          access_token: host.access_token
        }
        expect(response).to have_http_status 200
      end
    end

    context 'not permission' do
      it 'responds 404 error' do
        patch approve_api_v1_room_reservation_path(@instant_room, @reservation), params: {
          access_token: guest.access_token
        }
        expect(response.body).to include 'No Permission'
        expect(response).to have_http_status 404
      end
    end
  end

  describe 'booking with dicline function' do
    context 'have a permission' do
      it 'responds a status 200' do
        patch dicline_api_v1_room_reservation_path(@instant_room, @reservation), params: {
          access_token: host.access_token
        }
        expect(response).to have_http_status 200
      end
    end

    context 'no permission' do
      it 'responds a 404 error' do
        patch dicline_api_v1_room_reservation_path(@instant_room, @reservation), params: {
          access_token: guest.access_token
        }
        expect(response.body).to include 'No Permission'
        expect(response).to have_http_status 404
      end
    end
  end
end
