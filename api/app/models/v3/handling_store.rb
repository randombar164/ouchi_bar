class V3::HandlingStore < ApplicationRecord
  self.table_name = 'v3_handling_stores'

  has_many :concrete_ingredients_handling_stores, dependent: :destroy
  has_many :concrete_ingredients, through: :concrete_ingredients_handling_stores
end
