class CreateBaseDrinksBaseIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :base_drinks_base_ingredients do |t|
      t.references :base_ingredient, null: false, foreign_key: true, index: { name: 'base_drinks_base_ingredients_index_1' }
      t.references :base_drink, null: false, foreign_key: true, index: { name: 'base_drinks_base_ingredients_index_2' }
      t.string :amount
      t.string :additional_explanation
      t.references :unit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
