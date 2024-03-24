class Api::V1::RalliesController < ApplicationController
  def index
    rallies = Rally.all()
    render json:rallies, status:200
  end

  def show_promoted
    rallies = Rally.where(nil)
    rallies = rallies.filter_by_status("promoted")
    if rallies
      render json:rallies, status: 200
    else
      render json:{error: "no rallies found"}
    end
  end

  def find_user_rallies
  end
end
