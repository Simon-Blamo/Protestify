class AddTimeApprovedToRallies < ActiveRecord::Migration[7.1]
  def change
    add_column :rallies, :rally, :string
    add_column :rallies, :time_admin_decided, :datetime
  end
end
