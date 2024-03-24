class CreateRallies < ActiveRecord::Migration[7.1]
  def change
    create_table :rallies do |t|
      t.string :title
      t.string :description
      t.string :location
      t.date :event_date
      t.time :start_time
      t.string :status
      t.integer :number_of_attendees
      t.string :attendees
      t.references :activist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
