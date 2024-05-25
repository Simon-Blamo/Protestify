class RemoveNumberOfAttendeesFromRallies < ActiveRecord::Migration[7.1]
  def change
    remove_column :rallies, :attendees, :string
    remove_column :rallies, :number_of_attendees, :integer
  end
end
