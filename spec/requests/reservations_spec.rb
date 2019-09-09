# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Reservations API', type: :request do
  let(:host) { FactoryBot.create(:alice) }
  let(:guest) { FactoryBot.create(:bob) }
  let(:user_have_not_stripe) { FactoryBot.create(:carol) }

  before do
    @instant_room = FactoryBot.create(:instant_room, user: host)
    @request_room = FactoryBot.create(:request_room, user: host)
  end

  describe 'POST /create' do
    let(:valid_attributes) { FactoryBot.attributes_for(:reservation, user: guest, room: @instant_room) }

    context 'room is instant and request is valid' do
      it 'make a reservation' do
        expect do
          post api_v1_reservations_path, params: {
            room_id: @instant_room.id,
            access_token: guest.access_token,
            reservation: valid_attributes
          }
        end.to change(guest.reservations, :count).by(1)

        expect(response).to have_http_status 200
      end
    end

    context 'room is request and request is valid' do
      it 'make a reservation' do
        expect do
          post api_v1_reservations_path, params: {
            room_id: @request_room.id,
            access_token: guest.access_token,
            reservation: valid_attributes
          }
        end.to change(guest.reservations, :count).by(1)

        expect(response).to have_http_status 200
        expect(response.body).to include 'Request sent successfully'
      end
    end

    context 'user equal the room host user' do
      it 'responds 404 error' do
        post api_v1_reservations_path, params: {
          room_id: @instant_room.id,
          access_token: host.access_token,
          reservation: valid_attributes
        }
        expect(response).to have_http_status 404
        expect(response.body).to include 'You cannot book your own property!'
      end
    end

    context 'guest have not stripe_id' do
      it 'responds 404 error' do
        post api_v1_reservations_path, params: {
          room_id: @instant_room.id,
          access_token: user_have_not_stripe.access_token,
          reservation: valid_attributes
        }
        expect(response).to have_http_status 404
        expect(response.body).to include 'Update your payment method'
      end
    end
  end

  before do
    @reservation = FactoryBot.create(:reservation, user: guest, room: @instant_room)
  end

  describe 'booking with approve function' do
    context 'have a permisson' do
      it 'responds a status 200' do
        patch approve_api_v1_reservation_path(@reservation), params: {
          room_id: @instant_room.id,
          access_token: host.access_token
        }
        expect(response).to have_http_status 200
      end
    end

    context 'not permission' do
      it 'responds 404 error' do
        patch approve_api_v1_reservation_path(@reservation), params: {
          room_id: @instant_room.id,
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
        patch dicline_api_v1_reservation_path(@reservation), params: {
          room_id: @instant_room.id,
          access_token: host.access_token
        }
        expect(response).to have_http_status 200
      end
    end

    context 'no permission' do
      it 'responds a 404 error' do
        patch dicline_api_v1_reservation_path(@reservation), params: {
          room_id: @instant_room.id,
          access_token: guest.access_token
        }
        expect(response.body).to include 'No Permission'
        expect(response).to have_http_status 404
      end
    end
  end
end
