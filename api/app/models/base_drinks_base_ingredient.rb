class BaseDrinksBaseIngredient < ApplicationRecord
  belongs_to :base_ingredient
  belongs_to :base_drink
  belongs_to :unit
end
