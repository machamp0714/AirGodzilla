# frozen_string_literal: true

class User < ApplicationRecord
  before_save :downcase_email

  has_secure_password
  has_secure_token :access_token

  has_many :rooms, dependent: :destroy
  has_many :reservations, dependent: :destroy

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :password,
            presence: true,
            length: { minimum: 8 },
            # validationの実行タイミングを指定する。
            on: :create
  # 属性の値がblank?に相当する時、validationをスキップする
  # allow_blank: true

  private

  def downcase_email
    self.email = email.downcase
  end
end
