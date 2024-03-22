class Rally < ApplicationRecord
  scope :filter_by_status, -> (status) { where status: "promoted"}
  # Ex:- scope :active, -> {where(:active => true)}
end
