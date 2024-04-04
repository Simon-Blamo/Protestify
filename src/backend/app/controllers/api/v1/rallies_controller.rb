class Api::V1::RalliesController < ApplicationController
  def all_rallies_length
    num_of_rallies = Rally.all().to_a.length()
    render json:{success: num_of_rallies}, status:200
  end

  def fetch_by_status
    rallies = Rally.where("status = ?", params[:status]).order(created_at: :desc).to_a
    if rallies
      length = rallies.length
      for object in 0..length-1 do
        rallies[object] = rallies[object].attributes
        rallies[object]["start_time"] = rallies[object]["start_time"].strftime("%I:%M %p")
        rallies[object]["owner"] = User.find(Activist.find(rallies[object]["activist_id"]).user_id).username
      end
      render json:rallies, status: 200
    else
      render json:{error: "no rallies found"}
    end
  end

  def edit_status
    rally = Rally.find(params[:id].to_i)
    activist = Activist.find(params[:activist_id].to_i)
    if params.has_key?(:decision) and rally and activist
      if params[:decision] == true
        rally.status = 3

      else
        rally.status = 1
      end
      activist.pending_rally = false;
      activist.save!
      rally.save!
    end
    render json: {success: "Success"}
  end

  def create
    puts "Hi"
    puts "Hi"
    puts params[:start_time]
    puts DateTime.parse(params[:start_time])
    puts Time.parse(params[:start_time])
    puts "Hi"
    puts "Hi"

    @rally = Rally.new(
      title: params[:title],
      description: params[:description],
      location: params[:location],
      event_date: params[:event_date],
      start_time: DateTime.parse(params[:start_time]),
      activist_id: params[:activist_id]
    )
    if @rally.save!
      activist = Activist.find(params[:activist_id])
      activist.pending_rally = true
      activist.save!
      render json: {success: 'success'}, status: 200
    else
      render json:{error: "creation error"}
    end
  end

  def find_user_rallies
  end

  private
  def rally_params
    params.require(:rally).permit(:title, :description, :location, :event_date, :start_time, :activist_id, :status, :id)
  end

  def encode_token(payload)
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

end
