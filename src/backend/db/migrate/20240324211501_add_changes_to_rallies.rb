class AddChangesToRallies < ActiveRecord::Migration[7.1]
  def change
    change_column :rallies, :title, :string, null: false
    change_column :rallies, :description, :string, null: false
    change_column :rallies, :location, :string, null: false
    change_column :rallies, :event_date, :date, null: false
    change_column :rallies, :start_time, :time, null: false
  end
end
