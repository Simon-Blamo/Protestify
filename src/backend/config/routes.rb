# Project name: Protestify
# Description: Protestify is a web application, which gives activists the ability to suggest a peaceful protest that can be promoted on the website
# Filename: routes.rb
# Description: This file serves is the routes configuration file. This file defines the which function is called based 
# Last modified on: 04/08/2024


Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  namespace :api do
    namespace :v1 do
      # resources :rallies
      get "/rallies/:status", to: "rallies#fetch_by_status"
      get "/rallies", to: "rallies#all_rallies_length"
      post "/rallies", to: "rallies#create"
      post "/rallies/:id", to: "rallies#edit_status"
      post "/rallies/attendance/change", to: "rallies#edit_attendance_record"

      post "/users/creation", to: "users#create_activist"
      post "/users/auth", to: "users#auth_user"
      post "/users/login", to: "users#login_user"
      post "/users/access_emails", to: "users#find_email"
      get "/users/access_usernames/:username", to: "users#find_username"
      get "/users/total", to: "users#all_activists_length"
      post "/users/rallies", to: "users#get_all_rallies"

      post "/session/token_update", to: "sessions#update_token"
    end
  end
end
