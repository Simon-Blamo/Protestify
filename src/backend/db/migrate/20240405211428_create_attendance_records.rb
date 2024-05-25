class CreateAttendanceRecords < ActiveRecord::Migration[7.1]
  def change
    create_table :attendance_records do |t|
      t.string :attendees, null: false, default: ""
      t.integer :attendance_number, null: false, default: 0
      t.references :rally, null: false, foreign_key: true

      t.timestamps
    end
  end
end
