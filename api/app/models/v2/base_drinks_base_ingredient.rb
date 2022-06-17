class V2::BaseDrinksBaseIngredient < ApplicationRecord
  self.table_name = 'v2_base_drinks_base_ingredients'
  belongs_to :base_ingredient
  belongs_to :base_drink
  belongs_to :unit

  has_many :concrete_ingredients, through: :base_ingredient
end
