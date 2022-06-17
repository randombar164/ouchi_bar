class V2::BaseIngredientsConcreteIngredient < ApplicationRecord
  self.table_name = 'v2_base_ingredients_concrete_ingredients'

  belongs_to :base_ingredient
  belongs_to :concrete_ingredient
end
