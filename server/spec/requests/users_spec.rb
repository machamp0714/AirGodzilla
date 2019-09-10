# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Users API', type: :request do
  let(:user) { FactoryBot.build(:alice) }

  describe 'POST /signup' do
    it "新しいユーザーを作成できること" do
      expect {
        post api_v1_signup_path, params: {
          user: {
            name: user.name,
            email: user.email,
            password: user.password
          }
        }
      }.to change(User, :count).by(1)

      expect(response).to have_http_status 200
    end

    it "ユーザーの作成し失敗すること" do
      post api_v1_signup_path, params: {
        user: {
          name: "",
          email: "",
          password: ""
        }
      }
      expect(response).to have_http_status 422
    end
  end

  describe "add_card function" do
    let(:user_have_not_stripe) { FactoryBot.create(:alice) }
    let(:user_having_stripe) { FactoryBot.create(:bob) }

    context "request is valid" do
      it "adds a card when the stripe_id don't presence" do
        post api_v1_add_card_path, params: {
          access_token: user_have_not_stripe.access_token,
          expire: "09/32",
          number: "4242 4242 4242 4242",
          cvv: "000"
        }
        expect(response).to have_http_status 200
        expect(response.body).to include "Your card is saved"
      end

      it "updates a card when the stripe_id presences" do
        post api_v1_add_card_path, params: {
          access_token: user_having_stripe.access_token,
          expire: "09/32",
          number: "4242 4242 4242 4242",
          cvv: "000"
        }
        expect(response).to have_http_status 200
        expect(response.body).to include "Your card is saved"
      end
    end

    context "request is invalid" do
      it "responds 404 error" do
        post api_v1_add_card_path, params: {
          access_token: user_have_not_stripe.access_token,
          expire: "09/32",
          number: "0000 0000 0000 0000",
          cvv: "000"
        }
        expect(response).to have_http_status 404
      end
    end
  end
end
