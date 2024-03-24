class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :first_name, null: false, default: ""
      t.string :last_name, null: false, default: ""
      t.string :username, null: false
      t.boolean :is_admin?, null: false, default: false

      t.timestamps
    end
  end
end
