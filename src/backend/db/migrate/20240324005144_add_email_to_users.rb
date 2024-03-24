class AddEmailToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :email, :string, null: false
    change_column :users, :username, :string, limit: 8
  end
end
