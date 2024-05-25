# Project name: Protestify
# Description: Protestify is a web application, which gives activists the ability to suggest a peaceful protest that can be promoted on the website
# Filename: rallies_controller.rb
# Description: This file serves as the controller for rallies model in the protestify application.
# Last modified on: 04/08/2024

class Api::V1::RalliesController < ApplicationController

  # API call to retrieve the number of rallies found within the DB.
  def all_rallies_length
    num_of_rallies = Rally.all().to_a.length()
    render json:{success: num_of_rallies}, status:200
  end

  # API call to create a rally entity within database.
  def create
    # creates rally based on params found within the request.
    @rally = Rally.new(
      title: params[:title],
      description: params[:description],
      location: params[:location],
      event_date: params[:event_date],
      start_time: DateTime.parse(params[:start_time]),
      activist_id: params[:activist_id]
    )

    # if the rally entity is able to be saved, we create a corresponed attendance record entity that's tied to the rally, to keep track of activist users who mark that they're planning to attend the rally. Next, find the activist who created the rally, and change their pending_rally flag to true. This flag allows to the frontend to restrict activists with a rally submitted from spamming rallies to the admin queue. Finally, the API sends a success response after the work is done.
    # Otherwise, if the rally entity is not able to be saved to the DB, the API sends a error response.
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

  # API call to fetch all rallies based on their designated status.
  # 0 = pending
  # 1 = rejected
  # 2 = needs to resumbit
  # 3 = promoted
  # 4 = has passed
  def fetch_by_status
    # If the status request is not for pending rallies, retrieve rejected/promoted/passed rallies, and order them by time the admin had made a decision of the rally.
    # Otherwise if the status request is for pending rallies, order the rallies by time they were created in the DB.
    if(params[:status].to_i != 0)
      rallies = Rally.where("status = ?", params[:status]).order(time_admin_decided: :desc).to_a
    else
      rallies = Rally.where("status = ?", params[:status]).order(created_at: :desc).to_a
    end

    # If the rallies object exist, format/add attributes that will be needed for the frontend, then return that rallies object to the frontend as a JSON.
    # Otherwise, return an error to the frontend, stating that these rallies don't exist.
    if rallies
      length = rallies.length
      for rally_object in 0..length-1 do
        rallies[rally_object] = rallies[rally_object].attributes
        attendance_record_for_this_rally = AttendanceRecord.find_by(rally_id: rallies[rally_object]["id"])

        rallies[rally_object]["start_time"] = rallies[rally_object]["start_time"].strftime("%I:%M %p")
        rallies[rally_object]["owner"] = User.find(Activist.find(rallies[rally_object]["activist_id"]).user_id).username
        rallies[rally_object]["attendance_number"] = attendance_record_for_this_rally.attendance_number
        rallies[rally_object]["attendees"] = attendance_record_for_this_rally.attendees
      end
      render json:rallies, status: 200
    else
      render json:{error: "no rallies found"}
    end
  end

  # API call to edit/update the attendance record of a rally. If the attendance record exists, the function will update the record accordingly based on the activist's decision.
  # Otherwise, the API call will return an JSON response stating there was an error.
  def edit_attendance_record
    @attendance_record_for_this_rally = AttendanceRecord.find_by(rally_id: params[:id])
    if @attendance_record_for_this_rally
      attendees_list = @attendance_record_for_this_rally.attendees
      activist_user_wants_to_attend_rally = params[:decision]

      if activist_user_wants_to_attend_rally == true
        if attendees_list.length != 0
          attendees_list = JSON.parse(attendees_list)
        else
          attendees_list = []
        end

        attendees_list.push(params[:the_user])
        attendees_list = attendees_list.to_s
        @attendance_record_for_this_rally.attendees = attendees_list
        @attendance_record_for_this_rally.attendance_number += 1
        @attendance_record_for_this_rally.save!
      else
        attendees_list = JSON.parse(attendees_list)
        attendees_list.delete(params[:the_user])
        if attendees_list.length == 0
          attendees_list = ""
        else
          attendees_list = attendees_list.to_s
        end

        @attendance_record_for_this_rally.attendees = attendees_list
        @attendance_record_for_this_rally.attendance_number -= 1
        @attendance_record_for_this_rally.save!
      end
      return render json: {success: "success"}, status: 200
    else
      return render json: {error: "Unable to update attendance record for rally."}
    end
  end

  # API call to change the status of rallies. Only admins have access to this call.
  def edit_status
    rally = Rally.find(params[:id].to_i) # find rally by id passed in request
    activist = Activist.find(params[:activist_id].to_i) # find activist by id passed in request

    admin_approved_of_rally = params[:decision]

    promoted = 3
    rejected = 1

    # if the request has the admin's decision, and both the rally and activist exists within the DB, change the status accordingly.
    if params.has_key?(:decision) and rally and activist
      if admin_approved_of_rally == true
        rally.status = promoted
      else
        rally.status = rejected
      end
      rally.time_admin_decided = DateTime.now()
      activist.pending_rally = false;
      activist.save!
      rally.save!
      render json: {success: "Success"}
    else
      render json: {error: "Request could not be processed"}
    end
  end


  private
  def rally_params
    params.require(:rally).permit(:title, :description, :location, :event_date, :start_time, :activist_id, :status, :id)
  end

end
