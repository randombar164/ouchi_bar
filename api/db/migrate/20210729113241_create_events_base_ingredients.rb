class CreateEventsBaseIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :events_base_ingredients do |t|
      t.references :event, null: false, foreign_key: true
      t.references :base_ingredient, null: false, foreign_key: true
      t.references :assigned, null: true, foreign_key: { to_table: :event_members }

      t.timestamps
    end
  end
end
