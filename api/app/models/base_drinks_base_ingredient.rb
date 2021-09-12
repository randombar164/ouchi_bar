class BaseDrinksBaseIngredient < ApplicationRecord
  belongs_to :base_ingredient
  belongs_to :base_drink
  belongs_to :unit

  has_many :concrete_ingredients, through: :base_ingredient
end
