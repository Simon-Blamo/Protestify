class Rally < ApplicationRecord
  belongs_to :activist
  scope :filter_by_status, -> (status) { where status: 0}
  validates :status, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  has_one :attendance_records
  # 0 = pending
  # 1 = rejected
  # 2 = needs to resumbit
  # 3 = promoted
  # 4 = has passed
end
