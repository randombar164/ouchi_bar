class V2::ConcreteIngredientsHandlingStore < ApplicationRecord
  self.table_name = "v2_concrete_ingredient_handling_stores"

  belongs_to :concrete_ingredient
  belongs_to :handling_store
end
