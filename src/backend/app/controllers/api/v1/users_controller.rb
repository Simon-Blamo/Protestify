class Api::V1::UsersController < ApplicationController
include ActionController::Cookies


  def index_all_activists
    activist = Activist.all()
    render json:activist, status:200
  end

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

  def find_email
    email_exists = User.find_by(email: params[:email])
    if email_exists
      render json: {exists: true}
    else
      render json: {exists: false}
    end
  end

  def find_username
    username_exists = User.find_by(email: params[:username])
    if username_exists
      render json: {exists: true}
    else
      render json: {exists: false}
    end
  end

  def auth_user
    @user = User.find_by(username: params[:username])
    if @user && @user.password == params[:password]
      render json: {success: "Success"}, status: 200
    else
      render json: {error: "Invalid Credentials"}
    end
  end

  def login_user
    @user = User.find_by(username: params[:username])
    if @user && @user.password == params[:password]
      token = encode_token({
        value: {
          id: @user.id,
          first_name: @user.first_name,
          last_name: @user.last_name,
          username: @user.username,
          is_admin: @user.is_admin?
        }}
      )
      render json: {token: token}, status: 200
    else
      render json: {error: "Invalid Credentials"}
    end
  end


  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password)
  end

  def encode_token(payload)
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end


end
