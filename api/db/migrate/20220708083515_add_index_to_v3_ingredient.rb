class AddIndexToV3Ingredient < ActiveRecord::Migration[6.1]
  def change
    add_index :v3_ingredients, :asin, unique: true
  end
end
