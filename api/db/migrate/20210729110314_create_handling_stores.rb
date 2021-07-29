class CreateHandlingStores < ActiveRecord::Migration[6.0]
  def change
    create_table :handling_stores do |t|
      t.string :name

      t.timestamps
    end
  end
end
