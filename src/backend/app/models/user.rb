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
