# frozen_string_literal: true

class ApplicationController < ActionController::API
  skip_before_action :verify_authenticity_token

  include Authenticate

  rescue_from ActiveRecord::RecordNotFound, with: :render_404

  private

  def render_404
    render json: { error: 'Invalid ID', is_success: false }, status: 404
  end
end
