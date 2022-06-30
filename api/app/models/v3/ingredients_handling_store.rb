class V3::IngredientsHandlingStore < ApplicationRecord
  self.table_name = 'v3_ingredients_handling_stores'

  belongs_to :concrete_ingredient
  belongs_to :handling_store
end
