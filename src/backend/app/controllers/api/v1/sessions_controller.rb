# Project name: Protestify
# Description: Protestify is a web application, which gives activists the ability to suggest a peaceful protest that can be promoted on the website
# Filename: sessions_controller.rb
# Description: This file serves as the controller for session tokens in the protestify application.
# Last modified on: 04/08/2024

class Api::V1::SessionsController < ApplicationController

  # API call to update a logged-in user's token.
  def update_token
    token = params
    @user = User.find_by(username: token[:username])
    token = generate_token(@user)
    render json: {token: token}, status: 200
  end

  private

  # function to encrypt data.
  def encode_token(data)
    JWT.encode(data, Rails.application.secrets.secret_key_base)
  end

  # function to generate a token that will be sent to the browser.
  def generate_token(user)
    token = encode_token({
      value: {
        id: user.id,
        activist_id: user.is_admin? ? nil : Activist.find_by(user_id: user.id).id,
        admin_id: user.is_admin? ? Admin.find_by(user_id: user.id).id : nil,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        is_admin: user.is_admin?,
        pending_rally: user.is_admin? ? nil : Activist.find_by(user_id: user.id).pending_rally
      }
    })
    return token
  end
end
