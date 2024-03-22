class Api::V1::UsersController < ApplicationController
  def create_1
    user = Activist.new(
      first_name: user_params[:first_name],
      last_name: user_params[:last_name],
      username: user_params[:username],
      email: user_params[:email],
      password: user_params[:password],
    )
    if user.save
      render json: user, status: 200
    else
      render json:{error: "Creation error"}
    end
  end


  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password)
  end
end
