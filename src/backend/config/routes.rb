Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  namespace :api do
    namespace :v1 do
      # resources :rallies
      get "/rallies", to: "rallies#show_promoted"
      post "/users/creation", to: "users#create_activist"
      post "/users/auth", to: "users#auth_user"
      post "/users/login", to: "users#login_user"
      get "/users/access_emails/:email", to: "users#find_email"
      get "/users/access_usernames/:username", to: "user#find_username"
    end
  end
end
