class CreateRallies < ActiveRecord::Migration[7.1]
  def change
    create_table :rallies do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :location, null: false
      t.date :event_date, null: false
      t.datetime :start_time, null: false
      t.integer :status, null: false, default: 0
      t.integer :number_of_attendees, null: false, default: 0
      t.string :attendees, null: false, default: ""
      t.boolean :donations_needed, null: false, default: false
      t.string :donations_array, null: false, default: ""
      t.references :activist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
