class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :string
      t.string :password
      t.boolean :is_admin?

      t.timestamps
    end
  end
end
