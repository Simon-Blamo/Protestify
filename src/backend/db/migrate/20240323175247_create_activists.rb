class CreateActivists < ActiveRecord::Migration[7.1]
  def change
    create_table :activists do |t|
      t.boolean :pending_rally

      t.timestamps
    end
  end
end
