class BaseIngredient < ApplicationRecord
  self.table_name = "v2_base_ingredients"
  
  has_many :base_drinks_base_ingredients, dependent: :destroy
  has_many :base_ingredients_concrete_ingredients, dependent: :destroy
  has_many :base_drinks, through: :base_drinks_base_ingredients
  has_many :concrete_ingredients, through: :base_ingredients_concrete_ingredients
  belongs_to :category, optional: true
end
