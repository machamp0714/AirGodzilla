# frozen_string_literal: true

class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :price, presence: true
  validates :total, presence: true
end
