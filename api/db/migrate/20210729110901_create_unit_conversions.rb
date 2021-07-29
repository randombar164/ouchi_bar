class CreateUnitConversions < ActiveRecord::Migration[6.0]
  def change
    create_table :unit_conversions do |t|
      t.references :unit, null: false, foreign_key: true
      t.float :amount

      t.timestamps
    end
  end
end
