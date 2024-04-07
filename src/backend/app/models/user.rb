# Project name: Protestify
# Description: Protestify is a web application, which gives activists the ability to suggest a peaceful protest that can be promoted on the website
# Filename: user.rb
# Description: This file serves is the model file for the user entity class. We are able to define constraints of this model within this file.
# Last modified on: 04/08/2024


class User < ApplicationRecord
  has_one :activist
  has_one :admin

  include BCrypt

  validates :username, length: { minimum: 8 }

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def authenticate(password)
    @password == password
  end
end
