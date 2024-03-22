class CreateRallies < ActiveRecord::Migration[7.1]
  def change
    create_table :rallies do |t|
      t.integer :rally_id
      t.string :title
      t.string :description
      t.string :location
      t.date :event_date
      t.datetime :start_time
      t.integer :organizer_id
      t.string :status
      t.integer :number_of_attendees
      t.string :attendees

      t.timestamps
    end
  end
end
