# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_03_24_211501) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activists", force: :cascade do |t|
    t.boolean "pending_rally"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_activists_on_user_id"
  end

  create_table "admins", force: :cascade do |t|
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_admins_on_user_id"
  end

  create_table "rallies", force: :cascade do |t|
    t.string "title", null: false
    t.string "description", null: false
    t.string "location", null: false
    t.date "event_date", null: false
    t.time "start_time", null: false
    t.integer "status", default: 0, null: false
    t.integer "number_of_attendees", default: 0, null: false
    t.string "attendees", default: "", null: false
    t.bigint "activist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activist_id"], name: "index_rallies_on_activist_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "username", limit: 255, null: false
    t.boolean "is_admin?", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_hash", null: false
    t.string "email", null: false
  end

  add_foreign_key "activists", "users"
  add_foreign_key "admins", "users"
  add_foreign_key "rallies", "activists"
end
