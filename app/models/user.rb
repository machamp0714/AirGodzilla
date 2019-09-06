# frozen_string_literal: true

class User < ApplicationRecord
  before_save :downcase_email

  has_secure_password
  has_secure_token :access_token

  validates :name,
            presence: true
  validates :email,
            presence: true,
            uniqueness: { case_sensitive: false }
  validates :password,
            presence: true,
            length: { minumun: 8 }

  private

  def downcase_email
    self.email = email.downcase
  end
end
