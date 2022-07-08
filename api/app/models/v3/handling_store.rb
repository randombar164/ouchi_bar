class V3::HandlingStore < ApplicationRecord
  self.table_name = 'v3_handling_stores'

  has_many :ingredients_handling_stores, dependent: :destroy
  has_many :ingredients, through: :ingredients_handling_stores
end
