class ChangeTableNamesToV2 < ActiveRecord::Migration[6.1]
  def change
    rename_table :base_drinks, :v2_base_drinks
    rename_table :base_drinks_base_ingredients, :v2_base_drinks_base_ingredients
    rename_table :base_ingredients, :v2_base_ingredients
    rename_table :base_ingredients_concrete_ingredients, :v2_base_ingredients_concrete_ingredients
    rename_table :categories, :v2_categories
    rename_table :cocktails, :v2_cocktails
    rename_table :cocktails_concrete_ingredients, :v2_cocktails_concrete_ingredients
    rename_table :concrete_ingredients, :v2_concrete_ingredients
    rename_table :concrete_ingredients_handling_stores, :v2_concrete_ingredients_handling_stores
    rename_table :drink_methods, :v2_drink_methods
    rename_table :glass_types, :v2_glass_types
    rename_table :handling_stores, :v2_handling_stores
    rename_table :unit_conversions, :v2_unit_conversions
    rename_table :units, :v2_units
    rename_table :users, :v2_users
    rename_table :users_base_drinks, :v2_users_base_drinks
    rename_table :users_concrete_ingredients, :v2_users_concrete_ingredients
  end 
end
