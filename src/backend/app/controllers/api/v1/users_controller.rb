# Project name: Protestify
# Description: Protestify is a web application, which gives activists the ability to suggest a peaceful protest that can be promoted on the website
# Filename: Users_Controller.rb
# Description: This file serves as the controller for user model in the protestify application.
# Last modified on: 04/08/2024

class Api::V1::UsersController < ApplicationController
include ActionController::Cookies


  # API call to retrive all activist entities within DB.
  def all_activists
    activist = Activist.all()
    render json:activist, status:200
  end

  # API call to retieve the number of activist entities within DB.
  def all_activists_length
    num_of_activists = Activist.all().to_a.length()
    render json:{success: num_of_activists}, status:200
  end

  # API call to authenticate user when they attempt to log-in.
  def auth_user
    @user = User.find_by(username: params[:username])
    if @user && @user.password == params[:password]
      render json: {success: "Success"}, status: 200
    else
      render json: {error: "Invalid Credentials"}
    end
  end

  # API call to creaate an activist within DB.
  def create_activist
    @user = User.new(user_params)
    @user.password = params[:password]
    if @user.save!
      @activist = Activist.create(user: @user, pending_rally: false)
      render json: {succes: "Success"}, status: 200
    else
      render json: {error: "Creation error"}
    end
  end

  # API call to figure out whether of not the email being used for registration is present within the DB.
  def find_email
    email = params[:email]
    puts email
    email_exists = User.find_by(email: email)
    if email_exists
      render json: {exists: true}, status:200
    else
      render json: {exists: false}, status:200
    end
  end

  # API call to figure out whether of not the username being used for registration is present within the DB.
  def find_username
    username_exists = User.find_by(username: params[:username])
    if username_exists
      render json: {exists: true}, status:200
    else
      render json: {exists: false}, status:200
    end
  end

  # API call to retrieve all rallies made by a particular activist.
  def get_all_rallies
    user_rallies = Rally.where("activist_id = ?", params[:activist_id]).order(created_at: :desc).to_a
    if user_rallies
      length = user_rallies.length
      for rally_object in 0..length-1 do
        user_rallies[rally_object] = user_rallies[rally_object].attributes
        attendance_record_for_rally = AttendanceRecord.find_by(rally_id: user_rallies[rally_object]["id"])
        user_rallies[rally_object]["start_time"] = user_rallies[rally_object]["start_time"].strftime("%I:%M %p")
        user_rallies[rally_object]["owner"] = User.find(Activist.find(user_rallies[rally_object]["activist_id"]).user_id).username
        user_rallies[rally_object]["attendance_number"] = attendance_record_for_rally.attendance_number
        user_rallies[rally_object]["attendees"] = attendance_record_for_rally.attendees
      end
      render json: user_rallies, status:200
    else
      render json: {failed: "Failure"}, status:404
    end
  end

  # API call to "log user in" to application. API sends token to browser, so users can gain access to privilegded views/features.
  def login_user
    @user = User.find_by(username: params[:username])
    if @user && @user.password == params[:password]
      token = generate_token(@user)
      render json: {token: token}, status: 200
    else
      render json: {error: "Invalid Credentials"}
    end
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

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password)
  end

end
