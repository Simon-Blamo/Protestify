class Api::V1::SessionsController < ApplicationController

  def update_token
    token = params
    @user = User.find_by(username: token[:username])
    token = generate_token(@user)
    render json: {token: token}, status: 200
  end

  private
  def session_params
    params.require(:session)
  end

  def encode_token(payload)
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def generate_token(user)
    puts "HI MAN"
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
