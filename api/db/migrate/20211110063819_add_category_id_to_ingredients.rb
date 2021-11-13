class AddCategoryIdToIngredients < ActiveRecord::Migration[6.1]
  def change
    add_reference :base_ingredients, :category, index: true, null: true
    add_reference :concrete_ingredients, :category, index: true, null: true
  end
end
