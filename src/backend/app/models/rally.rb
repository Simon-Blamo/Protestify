class Rally < ApplicationRecord
  belongs_to :activist
  scope :filter_by_status, -> (status) { where status: "promoted"}
end
