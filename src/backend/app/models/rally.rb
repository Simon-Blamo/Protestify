# Project name: Protestify
# Description: Protestify is a web application, which gives activists the ability to suggest a peaceful protest that can be promoted on the website
# Filename: rally.rb
# Description: This file serves is the model file for the rally entity class. We are able to define constraints of this model within this file.
# Last modified on: 04/08/2024

class Rally < ApplicationRecord
  belongs_to :activist
  scope :filter_by_status, -> (status) { where status: 0}
  validates :status, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 4 }
  has_one :attendance_records
  # 0 = pending
  # 1 = rejected
  # 2 = needs to resumbit
  # 3 = promoted
  # 4 = has passed
end
