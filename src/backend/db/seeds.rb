#seed script to populate database upon migration.

include BCrypt




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
  username: "jane_doe",
  is_admin?: false,
  password_hash: hash_password("Password1234"),
  email: "janedoe@example.com"
)

@activist  = Activist.create(
  user_id: @user.id,
  pending_rally: true
)

@rally = Rally.create!(
  title: "Example Title 1",
  description: "Example Description",
  location: "1111 S Figueroa St, Los Angeles, CA 90015",
  event_date: Date.parse("2024-04-04"),
  start_time: DateTime.parse("2024-04-04 13:00"),
  status: 0,
  activist_id: @activist.id
)

AttendanceRecord.create!(
  rally_id: @rally.id,
)

@user = User.create!(
  first_name: "James",
  last_name: "Smith",
  username: "theJames_Smith",
  is_admin?: false,
  password_hash: hash_password("Password1234"),
  email: "jamessmith@example.com"
)

@activist = Activist.create(
  user_id: @user.id,
  pending_rally: true
)

@rally = Rally.create!(
  title: "Example Title 2",
  description: "Example Description",
  location: "20 W 34th St., New York, NY 10001",
  event_date: Date.parse("2024-05-24"),
  start_time: DateTime.parse("2024-05-24 10:00"),
  status: 0,
  activist_id: @activist.id
)

AttendanceRecord.create!(
  rally_id: @rally.id,
)


@user = User.create!(
  first_name: "Sam",
  last_name: "Blamo",
  username: "sam_blamo",
  is_admin?: false,
  password_hash: hash_password("Password1234"),
  email: "blamo@example.com"
)

@activist = Activist.create(
  user_id: @user.id,
  pending_rally: true
)

@rally = Rally.create!(
  title: "Rebuild Forcina!",
  description: "Example Description",
  location: "2000 Pennington Rd, Ewing Township, NJ 08628, USA",
  event_date: Date.parse("2024-04-08"),
  start_time: DateTime.parse("2024-04-08 11:00"),
  status: 0,
  activist_id: @activist.id
)

AttendanceRecord.create!(
  rally_id: @rally.id,
)

private


# function to hash user's password within DB.
def hash_password(pw)
  Password.create(pw)
end
