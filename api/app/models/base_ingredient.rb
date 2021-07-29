class BaseIngredient < ApplicationRecord
  has_many :base_drinks_base_ingredients
  has_many :concrete_ingredients
  has_many :base_drinks, through: :base_drinks_base_ingredients
end
