#seed script to populate database upon migration.

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
  title: "Rally for Educational Equity",
  description: "Demand proper funding for our public schools. Every child deserves access to a quality education, regardless of their zip code.",
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
  title: "Stop the Suffering: Rally Against Animal Cruelty in Research Labs",
  description: "Animals in research labs deserve compassion and freedom from pain. Join us in demanding an end to cruel testing practices and a shift towards humane research alternatives.",
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
  title: "Renovate Forcina!",
  description: "Stand with the CS student body! The Forcina Building has outdated for the last 20 years. We've been promised renovations for years, and still we have yet to seen anything bear fruit from TCNJ's \"promises\". I'm tired of taking a shaky elevator to get to my classes!",
  location: "2000 Pennington Rd, Ewing Township, NJ 08628, USA",
  event_date: Date.parse("2024-04-08"),
  start_time: DateTime.parse("2024-04-08 11:00"),
  status: 0,
  activist_id: @activist.id
)

AttendanceRecord.create!(
  rally_id: @rally.id
)
