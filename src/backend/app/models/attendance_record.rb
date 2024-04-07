# Project name: Protestify
# Description: Protestify is a web application, which gives activists the ability to suggest a peaceful protest that can be promoted on the website
# Filename: attendance_record.rb
# Description: This file serves is the model file for the attendance_record entity class. We are able to define constraints of this model within this file.
# Last modified on: 04/08/2024

class AttendanceRecord < ApplicationRecord
  belongs_to :rally
end
