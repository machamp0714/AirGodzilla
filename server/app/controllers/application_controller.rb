# frozen_string_literal: true

class ApplicationController < ActionController::API
  before_action :set_csrf_cookie

  include Authenticate

  rescue_from ActiveRecord::RecordNotFound, with: :render_404

  private

  def render_404
    render json: { error: 'Invalid ID', is_success: false }, status: 404
  end

  def set_csrf_cookie
    cookies[:CSRF_TOKEN] = form_authenticity_token
  end
end
