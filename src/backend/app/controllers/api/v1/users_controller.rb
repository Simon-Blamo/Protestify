class Api::V1::UsersController < ApplicationController
include ActionController::Cookies


  def all_activists
    activist = Activist.all()
    render json:activist, status:200
  end

  def all_activists_length
    num_of_activists = Activist.all().to_a.length()
    render json:{success: num_of_activists}, status:200
  end

  def auth_user
    @user = User.find_by(username: params[:username])
    if @user && @user.password == params[:password]
      render json: {success: "Success"}, status: 200
    else
      render json: {error: "Invalid Credentials"}
    end
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
    email = params[:email] + ".com"
    puts email
    email_exists = User.find_by(email: email)
    if email_exists
      render json: {exists: true}, status:200
    else
      render json: {exists: false}
    end
  end

  def find_username
    username_exists = User.find_by(username: params[:username])
    if username_exists
      render json: {exists: true}, status:200
    else
      render json: {exists: false}
    end
  end

  def get_all_rallies
    rallies = Rally.where("activist_id = ?", params[:activist_id]).order(created_at: :desc).to_a
    if rallies
      length = rallies.length
      for object in 0..length-1 do
        rallies[object] = rallies[object].attributes
        rallies[object]["start_time"] = rallies[object]["start_time"].strftime("%I:%M %p")
        rallies[object]["owner"] = User.find(Activist.find(rallies[object]["activist_id"]).user_id).username
      end
      render json: rallies, status:200
    else
      render json: {failed: "Failure"}, status:404
    end
  end

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

  def encode_token(data)
    JWT.encode(data, Rails.application.secrets.secret_key_base)
  end

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
