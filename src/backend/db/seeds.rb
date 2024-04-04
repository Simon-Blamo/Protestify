# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

include BCrypt

def hash_password(pw)
  Password.create(pw)
end

@user = User.create!(
  first_name: "John",
  last_name: "Smith",
  username: "the_admin",
  is_admin?: true,
  password_hash: hash_password("Password1234"),
  email: "johnsmith@example.com"
)

Admin.create(
  user_id: @user.id
)

@user = User.create!(
  first_name: "Jane",
  last_name: "Doe",
  username: "the_user1",
  is_admin?: false,
  password_hash: hash_password("Password1234"),
  email: "janedoe@example.com"
)

@activist  = Activist.create(
  user_id: @user.id,
  pending_rally: true
)

Rally.create!(
  title: "Example Title 1",
  description: "Example Description",
  location: "Example Location",
  event_date: Date.parse("2024-04-04"),
  start_time: DateTime.parse("2024-04-04 13:00"),
  status: 0,
  activist_id: @activist.id
)

@user = User.create!(
  first_name: "James",
  last_name: "Smith",
  username: "the_user2",
  is_admin?: false,
  password_hash: hash_password("Password1234"),
  email: "jamessmith@example.com"
)

@activist = Activist.create(
  user_id: @user.id,
  pending_rally: true
)

Rally.create!(
  title: "Example Title 2",
  description: "Example Description",
  location: "Example Location",
  event_date: Date.parse("2024-05-24"),
  start_time: DateTime.parse("2024-05-24 10:00"),
  status: 0,
  activist_id: @activist.id
)

@user = User.create!(
  first_name: "Maria",
  last_name: "Garcia",
  username: "the_user3",
  is_admin?: false,
  password_hash: hash_password("Password1234"),
  email: "mariagarcia@example.com"
)

@activist = Activist.create(
  user_id: @user.id,
  pending_rally: true
)

Rally.create!(
  title: "Example Title 3",
  description: "Example Description",
  location: "Example Location",
  event_date: Date.parse("2024-10-28"),
  start_time: DateTime.parse("2024-10-28 11:00"),
  status: 0,
  activist_id: @activist.id
)
