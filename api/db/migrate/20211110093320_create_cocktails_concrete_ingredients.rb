class CreateCocktailsConcreteIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :cocktails_concrete_ingredients do |t|
      t.references :concrete_ingredient, null: false, foreign_key: true, index: { name: 'cocktails_concrete_ingredients_index_1' }
      t.references :cocktail, null: false, foreign_key: true, index: { name: 'cocktails_concrete_ingredients_index_2' }
      t.string :amount
      t.string :additional_explanation
      t.references :unit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
