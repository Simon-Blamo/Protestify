class AddUserToActivists < ActiveRecord::Migration[7.1]
  def change
    add_reference :activists, :user, null: false, foreign_key: true
  end
end
