class V3::ConcreteIngredientsHandlingStore < ApplicationRecord
  self.table_name = 'v3_concrete_ingredient_handling_stores'

  belongs_to :concrete_ingredient
  belongs_to :handling_store
end
