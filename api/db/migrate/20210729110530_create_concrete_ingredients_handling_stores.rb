class CreateConcreteIngredientsHandlingStores < ActiveRecord::Migration[6.0]
  def change
    create_table :concrete_ingredients_handling_stores do |t|
      t.references :concrete_ingredient, null: false, foreign_key: true, index: { name: 'concrete_ingredients_handling_stores_index_1' }
      t.references :handling_store, null: false, foreign_key: true, index: { name: 'concrete_ingredients_handling_stores_index_2' }

      t.timestamps
    end
  end
end
