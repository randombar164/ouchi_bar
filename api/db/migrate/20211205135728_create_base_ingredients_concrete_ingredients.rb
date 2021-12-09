class CreateBaseIngredientsConcreteIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :base_ingredients_concrete_ingredients do |t|
      t.references :base_ingredient, null: false, foreign_key: true, index: { name: 'base_ingredients_concrete_ingredients_index_1' }
      t.references :concrete_ingredient, null: false, foreign_key: true, index: { name: 'base_ingredients_concrete_ingredients_index_2' }

      t.timestamps
    end
  end
end
