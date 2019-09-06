# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Users API', type: :request do
  let(:user) { FactoryBot.build(:alice) }

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
end
