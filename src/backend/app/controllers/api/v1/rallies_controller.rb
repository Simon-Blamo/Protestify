class Api::V1::RalliesController < ApplicationController
  def all_rallies_length
    num_of_rallies = Rally.all().to_a.length()
    render json:{success: num_of_rallies}, status:200
  end

  def fetch_by_status
    if(params[:status].to_i != 0)
      rallies = Rally.where("status = ?", params[:status]).order(time_admin_decided: :desc).to_a
    else
      rallies = Rally.where("status = ?", params[:status]).order(created_at: :desc).to_a
    end

    if rallies
      length = rallies.length
      for object in 0..length-1 do
        rallies[object] = rallies[object].attributes
        attendance_record = AttendanceRecord.find_by(rally_id: rallies[object]["id"])

        rallies[object]["start_time"] = rallies[object]["start_time"].strftime("%I:%M %p")
        rallies[object]["owner"] = User.find(Activist.find(rallies[object]["activist_id"]).user_id).username
        rallies[object]["attendance_number"] = attendance_record.attendance_number
        rallies[object]["attendees"] = attendance_record.attendees
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
      rally.time_admin_decided = DateTime.now()
      activist.pending_rally = false;
      activist.save!
      rally.save!
    end
    render json: {success: "Success"}
  end

  def edit_attendance_record
    @attendance_record = AttendanceRecord.find_by(rally_id: params[:id])
    attendees = @attendance_record.attendees
    if params[:decision] == true
      if attendees.length != 0
        attendees = JSON.parse(attendees)
      else
        attendees = []
      end
        attendees.push(params[:the_user])
        attendees = attendees.to_s
        @attendance_record.attendees = attendees
        @attendance_record.attendance_number += 1
        @attendance_record.save!
    else
      attendees = JSON.parse(attendees)
      attendees.delete(params[:the_user])
      if attendees.length == 0
        attendees = ""
      else
        attendees = attendees.to_s
      end
      @attendance_record.attendees = attendees
      @attendance_record.attendance_number -= 1
      @attendance_record.save!
    end
    return render json: {success: "success"}, status: 200
  end

  def create
    @rally = Rally.new(
      title: params[:title],
      description: params[:description],
      location: params[:location],
      event_date: params[:event_date],
      start_time: DateTime.parse(params[:start_time]),
      activist_id: params[:activist_id]
    )
    if @rally.save!
      @attendance_record = AttendanceRecord.create(
        rally_id: @rally.id
      )
      @attendance_record.save!
      activist = Activist.find(params[:activist_id])
      activist.pending_rally = true
      activist.save!

      render json: {success: 'success'}, status: 200
    else
      render json:{error: "creation error"}
    end
  end

  def update_attendance
    
  end

  private
  def rally_params
    params.require(:rally).permit(:title, :description, :location, :event_date, :start_time, :activist_id, :status, :id)
  end

  def encode_token(payload)
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

end
