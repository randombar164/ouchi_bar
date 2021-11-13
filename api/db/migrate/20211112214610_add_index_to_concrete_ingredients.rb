class AddIndexToConcreteIngredients < ActiveRecord::Migration[6.1]
  def change
    add_index :concrete_ingredients, :asin, unique: true
  end
end
