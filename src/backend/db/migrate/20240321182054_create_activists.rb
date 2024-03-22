class CreateActivists < ActiveRecord::Migration[7.1]
  def change
    create_table :activists do |t|

      t.timestamps
    end
  end
end
