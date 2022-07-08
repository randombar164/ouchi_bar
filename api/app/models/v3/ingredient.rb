class V3::Ingredient < ApplicationRecord
  self.table_name = 'v3_ingredients'

  validates :asin, uniqueness: true, allow_nil: true

  belongs_to :category, optional: true
  has_many :ingredients_handling_stores, dependent: :destroy
  has_many :handling_stores, through: :ingredients_handling_stores
  has_many :cocktails_ingredients, dependent: :destroy
  has_many :cocktails, through: :cocktails_ingredients
  has_many :users_ingredients, dependent: :destroy
end
